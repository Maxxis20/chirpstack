import { useState, useEffect, useCallback } from "react";
import { Select, Space, Spin } from "antd";
import { sub } from "date-fns";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import {
  ListDevicesRequest,
  GetDeviceMetricsRequest,
} from "@chirpstack/chirpstack-api-grpc-web/api/device_pb";
import type {
  ListDevicesResponse,
  DeviceListItem,
  GetDeviceMetricsResponse,
} from "@chirpstack/chirpstack-api-grpc-web/api/device_pb";
import { Aggregation } from "@chirpstack/chirpstack-api-grpc-web/common/common_pb";

import DeviceStore from "../stores/DeviceStore";

const { Option } = Select;

interface DeviceFieldSelectorProps {
  value?: { device_eui: string; metric_field: string };
  onChange?: (value: { device_eui: string; metric_field: string }) => void;
  deviceEui?: string;
  metricField?: string;
  onDeviceChange?: (deviceEui: string) => void;
  onFieldChange?: (field: string) => void;
}

interface DeviceOption {
  devEui: string;
  name: string;
  description: string;
}

function DeviceFieldSelector(props: DeviceFieldSelectorProps) {
  const [devices, setDevices] = useState<DeviceOption[]>([]);
  const [fields, setFields] = useState<string[]>([]);
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [loadingFields, setLoadingFields] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<string>(
    props.value?.device_eui || props.deviceEui || ""
  );
  const [selectedField, setSelectedField] = useState<string>(
    props.value?.metric_field || props.metricField || ""
  );

  // Load all devices from ChirpStack
  const loadDevices = useCallback(() => {
    setLoadingDevices(true);

    const req = new ListDevicesRequest();
    req.setLimit(1000); // Get up to 1000 devices

    DeviceStore.list(req, (resp: ListDevicesResponse) => {
      const deviceList = resp.getResultList().map((d: DeviceListItem) => ({
        devEui: d.getDevEui(),
        name: d.getName(),
        description: d.getDescription(),
      }));
      setDevices(deviceList);
      setLoadingDevices(false);
    });
  }, []);

  // Load available fields (metrics) for a device
  const loadDeviceFields = useCallback((devEui: string) => {
    if (!devEui) {
      setFields([]);
      return;
    }

    setLoadingFields(true);

    const end = new Date();
    const start = sub(end, { days: 7 }); // Look at last 7 days of data

    const startPb = new Timestamp();
    const endPb = new Timestamp();
    startPb.fromDate(start);
    endPb.fromDate(end);

    const req = new GetDeviceMetricsRequest();
    req.setDevEui(devEui);
    req.setStart(startPb);
    req.setEnd(endPb);
    req.setAggregation(Aggregation.DAY);

    DeviceStore.getMetrics(req, (resp: GetDeviceMetricsResponse) => {
      const discoveredFields: string[] = [];

      // Get fields from states (current values)
      const states = resp.getStatesMap();
      states.toArray().forEach(([key]) => {
        if (!discoveredFields.includes(key)) {
          discoveredFields.push(key);
        }
      });

      // Get fields from metrics (time-series)
      const metrics = resp.getMetricsMap();
      metrics.toArray().forEach(([key]) => {
        if (!discoveredFields.includes(key)) {
          discoveredFields.push(key);
        }
      });

      discoveredFields.sort();
      setFields(discoveredFields);
      setLoadingFields(false);
    });
  }, []);

  // Initial load of devices
  useEffect(() => {
    loadDevices();
  }, [loadDevices]);

  // Load fields when device changes
  useEffect(() => {
    if (selectedDevice) {
      loadDeviceFields(selectedDevice);
    }
  }, [selectedDevice, loadDeviceFields]);

  // Sync with external props
  useEffect(() => {
    if (props.deviceEui && props.deviceEui !== selectedDevice) {
      setSelectedDevice(props.deviceEui);
    }
    if (props.metricField && props.metricField !== selectedField) {
      setSelectedField(props.metricField);
    }
  }, [props.deviceEui, props.metricField]);

  const handleDeviceChange = (devEui: string) => {
    setSelectedDevice(devEui);
    setSelectedField(""); // Reset field when device changes
    setFields([]); // Clear fields

    if (props.onChange) {
      props.onChange({ device_eui: devEui, metric_field: "" });
    }
    if (props.onDeviceChange) {
      props.onDeviceChange(devEui);
    }
  };

  const handleFieldChange = (field: string) => {
    setSelectedField(field);

    if (props.onChange) {
      props.onChange({ device_eui: selectedDevice, metric_field: field });
    }
    if (props.onFieldChange) {
      props.onFieldChange(field);
    }
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Select
        showSearch
        placeholder="Select LoRaWAN Device"
        value={selectedDevice || undefined}
        onChange={handleDeviceChange}
        loading={loadingDevices}
        style={{ width: "100%" }}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children as unknown as string)?.toLowerCase().includes(input.toLowerCase())
        }
        notFoundContent={loadingDevices ? <Spin size="small" /> : "No devices found"}
      >
        {devices.map(device => (
          <Option key={device.devEui} value={device.devEui}>
            {device.name} ({device.devEui})
          </Option>
        ))}
      </Select>

      <Select
        showSearch
        placeholder={
          selectedDevice
            ? loadingFields
              ? "Loading fields..."
              : fields.length > 0
                ? "Select Data Field"
                : "No fields discovered - enter manually"
            : "Select a device first"
        }
        value={selectedField || undefined}
        onChange={handleFieldChange}
        loading={loadingFields}
        disabled={!selectedDevice}
        style={{ width: "100%" }}
        optionFilterProp="children"
        mode="tags"
        maxTagCount={1}
        filterOption={(input, option) =>
          (option?.children as unknown as string)?.toLowerCase().includes(input.toLowerCase())
        }
        notFoundContent={
          loadingFields ? (
            <Spin size="small" />
          ) : fields.length === 0 ? (
            "No fields discovered. Type to add manually."
          ) : null
        }
      >
        {fields.map(field => (
          <Option key={field} value={field}>
            {field}
          </Option>
        ))}
      </Select>
    </Space>
  );
}

export default DeviceFieldSelector;

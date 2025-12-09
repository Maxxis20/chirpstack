import { useState, useEffect } from "react";
import { Select, Space, Input, Spin, Typography } from "antd";

import { ListApplicationsRequest } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import type {
  ListApplicationsResponse,
  ApplicationListItem,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import { ListDevicesRequest } from "@chirpstack/chirpstack-api-grpc-web/api/device_pb";
import type { ListDevicesResponse, DeviceListItem } from "@chirpstack/chirpstack-api-grpc-web/api/device_pb";

import ApplicationStore from "../stores/ApplicationStore";
import DeviceStore from "../stores/DeviceStore";

const { Text } = Typography;

interface DeviceInfo {
  devEui: string;
  name: string;
  applicationId: string;
  applicationName: string;
}

interface DeviceMetricSelectorProps {
  value?: { deviceEui?: string; metricField?: string };
  onChange?: (value: { deviceEui: string; metricField: string }) => void;
  placeholder?: {
    device?: string;
    metric?: string;
  };
}

function DeviceMetricSelector({ value, onChange, placeholder }: DeviceMetricSelectorProps) {
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<DeviceInfo[]>([]);
  const [selectedDeviceEui, setSelectedDeviceEui] = useState<string>(value?.deviceEui || "");
  const [metricField, setMetricField] = useState<string>(value?.metricField || "");

  useEffect(() => {
    loadDevices();
  }, []);

  useEffect(() => {
    if (value) {
      setSelectedDeviceEui(value.deviceEui || "");
      setMetricField(value.metricField || "");
    }
  }, [value]);

  const loadDevices = async () => {
    setLoading(true);
    const allDevices: DeviceInfo[] = [];

    try {
      // First, get all applications
      const appReq = new ListApplicationsRequest();
      appReq.setLimit(1000);

      ApplicationStore.list(appReq, (appResp: ListApplicationsResponse) => {
        const applications = appResp.toObject().resultList;
        let pendingRequests = applications.length;

        if (pendingRequests === 0) {
          setDevices([]);
          setLoading(false);
          return;
        }

        // Then get devices for each application
        applications.forEach((app: ApplicationListItem.AsObject) => {
          const devReq = new ListDevicesRequest();
          devReq.setApplicationId(app.id);
          devReq.setLimit(1000);

          DeviceStore.list(devReq, (devResp: ListDevicesResponse) => {
            const devList = devResp.toObject().resultList;

            devList.forEach((dev: DeviceListItem.AsObject) => {
              allDevices.push({
                devEui: dev.devEui,
                name: dev.name,
                applicationId: app.id,
                applicationName: app.name,
              });
            });

            pendingRequests--;
            if (pendingRequests === 0) {
              // Sort by application name, then device name
              allDevices.sort((a, b) => {
                const appCompare = a.applicationName.localeCompare(b.applicationName);
                if (appCompare !== 0) return appCompare;
                return a.name.localeCompare(b.name);
              });
              setDevices(allDevices);
              setLoading(false);
            }
          });
        });
      });
    } catch (err) {
      console.error("Failed to load devices:", err);
      setLoading(false);
    }
  };

  const handleDeviceChange = (devEui: string) => {
    setSelectedDeviceEui(devEui);
    if (onChange) {
      onChange({ deviceEui: devEui, metricField });
    }
  };

  const handleMetricChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMetric = e.target.value;
    setMetricField(newMetric);
    if (onChange) {
      onChange({ deviceEui: selectedDeviceEui, metricField: newMetric });
    }
  };

  // Group devices by application for the Select options
  const groupedOptions = devices.reduce(
    (acc, device) => {
      if (!acc[device.applicationName]) {
        acc[device.applicationName] = [];
      }
      acc[device.applicationName].push(device);
      return acc;
    },
    {} as { [key: string]: DeviceInfo[] },
  );

  if (loading) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Spin size="small" />
        <Text type="secondary">Loading devices...</Text>
      </Space>
    );
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder={placeholder?.device || "Select device"}
        value={selectedDeviceEui || undefined}
        onChange={handleDeviceChange}
        optionFilterProp="children"
        filterOption={(input, option) => {
          const label = option?.label?.toString().toLowerCase() || "";
          return label.includes(input.toLowerCase());
        }}
      >
        {Object.entries(groupedOptions).map(([appName, appDevices]) => (
          <Select.OptGroup key={appName} label={appName}>
            {appDevices.map(device => (
              <Select.Option key={device.devEui} value={device.devEui} label={`${device.name} (${device.devEui})`}>
                <Space>
                  <span>{device.name}</span>
                  <Text type="secondary" style={{ fontSize: "0.85em" }}>
                    {device.devEui}
                  </Text>
                </Space>
              </Select.Option>
            ))}
          </Select.OptGroup>
        ))}
      </Select>
      <Input
        placeholder={placeholder?.metric || "Metric field (e.g., temperature, humidity)"}
        value={metricField}
        onChange={handleMetricChange}
      />
    </Space>
  );
}

export default DeviceMetricSelector;

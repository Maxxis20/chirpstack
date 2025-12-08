import { Form, Input, Button, InputNumber } from "antd";

import { BacnetIntegration } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import { onFinishFailed } from "../../helpers";

interface IProps {
  initialValues: BacnetIntegration;
  onFinish: (obj: BacnetIntegration) => void;
}

function BacnetIntegrationForm(props: IProps) {
  const onFinish = (values: BacnetIntegration.AsObject) => {
    const v = Object.assign(props.initialValues.toObject(), values);
    const i = new BacnetIntegration();

    i.setApplicationId(v.applicationId);
    i.setDeviceId(v.deviceId);
    i.setDeviceName(v.deviceName);
    i.setDeviceAddress(v.deviceAddress);
    i.setDevicePort(v.devicePort);
    i.setObjectName(v.objectName);
    i.setVendorName(v.vendorName);
    i.setModelName(v.modelName);

    props.onFinish(i);
  };

  return (
    <Form
      layout="vertical"
      initialValues={props.initialValues.toObject()}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Device ID"
        name="deviceId"
        rules={[{ required: true, message: "Please enter a device ID!" }]}
        tooltip="BACnet device instance ID (unique identifier for this BACnet device)"
      >
        <InputNumber min={1} max={4194302} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Device name"
        name="deviceName"
        rules={[{ required: true, message: "Please enter a device name!" }]}
        tooltip="Human-readable name for this BACnet device"
      >
        <Input placeholder="ChirpStack BACnet Gateway" />
      </Form.Item>
      <Form.Item
        label="Device address"
        name="deviceAddress"
        rules={[{ required: true, message: "Please enter a device address!" }]}
        tooltip="IP address to bind the BACnet device to"
      >
        <Input placeholder="0.0.0.0" />
      </Form.Item>
      <Form.Item
        label="Device port"
        name="devicePort"
        rules={[{ required: true, message: "Please enter a device port!" }]}
        tooltip="UDP port for the BACnet device (default: 47808)"
      >
        <InputNumber min={1} max={65535} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Object name"
        name="objectName"
        tooltip="BACnet object name for this device"
      >
        <Input placeholder="ChirpStack_Gateway" />
      </Form.Item>
      <Form.Item
        label="Vendor name"
        name="vendorName"
        tooltip="Device vendor name for BACnet device identification"
      >
        <Input placeholder="ChirpStack" />
      </Form.Item>
      <Form.Item
        label="Model name"
        name="modelName"
        tooltip="Device model name for BACnet device identification"
      >
        <Input placeholder="BACnet-LoRaWAN Bridge" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BacnetIntegrationForm;

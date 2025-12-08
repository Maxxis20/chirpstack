import { Form, Input, Button, InputNumber } from "antd";

import { ModbusIntegration } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import { onFinishFailed } from "../../helpers";

interface IProps {
  initialValues: ModbusIntegration;
  onFinish: (obj: ModbusIntegration) => void;
}

function ModbusIntegrationForm(props: IProps) {
  const onFinish = (values: ModbusIntegration.AsObject) => {
    const v = Object.assign(props.initialValues.toObject(), values);
    const i = new ModbusIntegration();

    i.setApplicationId(v.applicationId);
    i.setServerAddress(v.serverAddress);
    i.setServerPort(v.serverPort);
    i.setUnitId(v.unitId);
    i.setVendorName(v.vendorName);
    i.setProductCode(v.productCode);
    i.setModelName(v.modelName);
    i.setVersion(v.version);

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
        label="Server address"
        name="serverAddress"
        rules={[{ required: true, message: "Please enter a server address!" }]}
        tooltip="The address to bind the Modbus TCP server to (e.g., 0.0.0.0)"
      >
        <Input placeholder="0.0.0.0" />
      </Form.Item>
      <Form.Item
        label="Server port"
        name="serverPort"
        rules={[{ required: true, message: "Please enter a server port!" }]}
        tooltip="The port for the Modbus TCP server (default: 502)"
      >
        <InputNumber min={1} max={65535} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Unit ID"
        name="unitId"
        rules={[{ required: true, message: "Please enter a unit ID!" }]}
        tooltip="Modbus unit ID / slave address (1-247)"
      >
        <InputNumber min={1} max={247} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Vendor name"
        name="vendorName"
        tooltip="Device vendor name for Modbus device identification"
      >
        <Input placeholder="ChirpStack" />
      </Form.Item>
      <Form.Item
        label="Product code"
        name="productCode"
        tooltip="Device product code for Modbus device identification"
      >
        <Input placeholder="MODBUS-LORA" />
      </Form.Item>
      <Form.Item
        label="Model name"
        name="modelName"
        tooltip="Device model name for Modbus device identification"
      >
        <Input placeholder="Modbus-LoRaWAN Bridge" />
      </Form.Item>
      <Form.Item
        label="Version"
        name="version"
        tooltip="Device version for Modbus device identification"
      >
        <Input placeholder="1.0.0" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ModbusIntegrationForm;

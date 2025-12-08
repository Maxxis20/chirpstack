import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function ModbusConfig() {
  return (
    <Card title="Modbus TCP Configuration">
      <Title level={4}>Modbus TCP Service</Title>
      <Paragraph>
        Configure Modbus TCP integration for your LoRaWAN devices. The Modbus TCP service allows you to expose device data through the Modbus TCP protocol for integration with industrial automation systems.
      </Paragraph>
      <Paragraph>
        To configure Modbus TCP integration for an application, navigate to:
        <br />
        <strong>Application → Integrations → Modbus TCP</strong>
      </Paragraph>
    </Card>
  );
}

export default ModbusConfig;

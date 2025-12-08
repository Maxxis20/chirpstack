import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function BacnetConfig() {
  return (
    <Card title="BACnet Configuration">
      <Title level={4}>BACnet Service</Title>
      <Paragraph>
        Configure BACnet integration for your LoRaWAN devices. The BACnet service allows you to expose device data through the BACnet protocol for building automation and control systems.
      </Paragraph>
      <Paragraph>
        To configure BACnet integration for an application, navigate to:
        <br />
        <strong>Application → Integrations → BACnet</strong>
      </Paragraph>
    </Card>
  );
}

export default BacnetConfig;

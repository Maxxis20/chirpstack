import { Link } from "react-router-dom";

import { Col, Card, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { Application } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import { DeleteBacnetIntegrationRequest } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
  add?: boolean;
}

function BacnetCard(props: IProps) {
  const onDelete = () => {
    const req = new DeleteBacnetIntegrationRequest();
    req.setApplicationId(props.application.getId());
    ApplicationStore.deleteBacnetIntegration(req, () => {});
  };

  let actions: JSX.Element[] = [];

  if (props.add) {
    actions = [
      <Link to="bacnet/create">
        <PlusOutlined />
      </Link>,
    ];
  } else {
    actions = [
      <Link to="bacnet/edit">
        <EditOutlined />
      </Link>,
      <Popconfirm title="Are you sure you want to delete this integration?" onConfirm={onDelete}>
        <DeleteOutlined />
      </Popconfirm>,
    ];
  }

  return (
    <Col span={8}>
      <Card
        title="BACnet"
        className="integration-card"
        cover={<img alt="BACnet" src="/integrations/bacnet.png" style={{ padding: 1 }} />}
        actions={actions}
      >
        <Card.Meta description="Expose LoRaWAN sensor data as BACnet objects for building automation systems." />
      </Card>
    </Col>
  );
}

export default BacnetCard;

import { Link } from "react-router-dom";

import { Col, Card, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { Application } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import { DeleteModbusIntegrationRequest } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
  add?: boolean;
}

function ModbusCard(props: IProps) {
  const onDelete = () => {
    const req = new DeleteModbusIntegrationRequest();
    req.setApplicationId(props.application.getId());
    ApplicationStore.deleteModbusIntegration(req, () => {});
  };

  let actions: JSX.Element[] = [];

  if (props.add) {
    actions = [
      <Link to="modbus/create">
        <PlusOutlined />
      </Link>,
    ];
  } else {
    actions = [
      <Link to="modbus/edit">
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
        title="Modbus TCP"
        className="integration-card"
        cover={<img alt="Modbus" src="/integrations/modbus.png" style={{ padding: 1 }} />}
        actions={actions}
      >
        <Card.Meta description="Expose LoRaWAN sensor data as Modbus registers for SCADA and industrial automation systems." />
      </Card>
    </Col>
  );
}

export default ModbusCard;

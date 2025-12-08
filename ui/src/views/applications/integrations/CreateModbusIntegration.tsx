import { useNavigate } from "react-router-dom";

import { Card } from "antd";

import type { Application } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import {
  ModbusIntegration,
  CreateModbusIntegrationRequest,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import ModbusIntegrationForm from "./ModbusIntegrationForm";
import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
}

function CreateModbusIntegration(props: IProps) {
  const navigate = useNavigate();

  const onFinish = (obj: ModbusIntegration) => {
    obj.setApplicationId(props.application.getId());

    const req = new CreateModbusIntegrationRequest();
    req.setIntegration(obj);

    ApplicationStore.createModbusIntegration(req, () => {
      navigate(`/tenants/${props.application.getTenantId()}/applications/${props.application.getId()}/integrations`);
    });
  };

  const i = new ModbusIntegration();
  i.setServerAddress("0.0.0.0");
  i.setServerPort(502);
  i.setUnitId(1);
  i.setVendorName("ChirpStack");
  i.setProductCode("MODBUS-LORA");
  i.setModelName("Modbus-LoRaWAN Bridge");
  i.setVersion("1.0.0");

  return (
    <Card title="Add Modbus TCP integration">
      <ModbusIntegrationForm initialValues={i} onFinish={onFinish} />
    </Card>
  );
}

export default CreateModbusIntegration;

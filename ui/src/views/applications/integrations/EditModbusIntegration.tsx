import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "antd";

import type {
  Application,
  ModbusIntegration,
  GetModbusIntegrationResponse,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import {
  GetModbusIntegrationRequest,
  UpdateModbusIntegrationRequest,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import ModbusIntegrationForm from "./ModbusIntegrationForm";
import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
}

function EditModbusIntegration(props: IProps) {
  const navigate = useNavigate();
  const [integration, setIntegration] = useState<ModbusIntegration | undefined>(undefined);

  useEffect(() => {
    const req = new GetModbusIntegrationRequest();
    req.setApplicationId(props.application.getId());

    ApplicationStore.getModbusIntegration(req, (resp: GetModbusIntegrationResponse) => {
      setIntegration(resp.getIntegration());
    });
  }, [props]);

  const onFinish = (obj: ModbusIntegration) => {
    const req = new UpdateModbusIntegrationRequest();
    req.setIntegration(obj);

    ApplicationStore.updateModbusIntegration(req, () => {
      navigate(`/tenants/${props.application.getTenantId()}/applications/${props.application.getId()}/integrations`);
    });
  };

  if (integration === undefined) {
    return null;
  }

  return (
    <Card title="Update Modbus TCP integration">
      <ModbusIntegrationForm initialValues={integration} onFinish={onFinish} />
    </Card>
  );
}

export default EditModbusIntegration;

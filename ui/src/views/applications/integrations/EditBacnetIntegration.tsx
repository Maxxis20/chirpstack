import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "antd";

import type {
  Application,
  BacnetIntegration,
  GetBacnetIntegrationResponse,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import {
  GetBacnetIntegrationRequest,
  UpdateBacnetIntegrationRequest,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import BacnetIntegrationForm from "./BacnetIntegrationForm";
import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
}

function EditBacnetIntegration(props: IProps) {
  const navigate = useNavigate();
  const [integration, setIntegration] = useState<BacnetIntegration | undefined>(undefined);

  useEffect(() => {
    const req = new GetBacnetIntegrationRequest();
    req.setApplicationId(props.application.getId());

    ApplicationStore.getBacnetIntegration(req, (resp: GetBacnetIntegrationResponse) => {
      setIntegration(resp.getIntegration());
    });
  }, [props]);

  const onFinish = (obj: BacnetIntegration) => {
    const req = new UpdateBacnetIntegrationRequest();
    req.setIntegration(obj);

    ApplicationStore.updateBacnetIntegration(req, () => {
      navigate(`/tenants/${props.application.getTenantId()}/applications/${props.application.getId()}/integrations`);
    });
  };

  if (integration === undefined) {
    return null;
  }

  return (
    <Card title="Update BACnet integration">
      <BacnetIntegrationForm initialValues={integration} onFinish={onFinish} />
    </Card>
  );
}

export default EditBacnetIntegration;

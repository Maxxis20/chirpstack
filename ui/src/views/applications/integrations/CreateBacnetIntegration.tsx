import { useNavigate } from "react-router-dom";

import { Card } from "antd";

import type { Application } from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";
import {
  BacnetIntegration,
  CreateBacnetIntegrationRequest,
} from "@chirpstack/chirpstack-api-grpc-web/api/application_pb";

import BacnetIntegrationForm from "./BacnetIntegrationForm";
import ApplicationStore from "../../../stores/ApplicationStore";

interface IProps {
  application: Application;
}

function CreateBacnetIntegration(props: IProps) {
  const navigate = useNavigate();

  const onFinish = (obj: BacnetIntegration) => {
    obj.setApplicationId(props.application.getId());

    const req = new CreateBacnetIntegrationRequest();
    req.setIntegration(obj);

    ApplicationStore.createBacnetIntegration(req, () => {
      navigate(`/tenants/${props.application.getTenantId()}/applications/${props.application.getId()}/integrations`);
    });
  };

  const i = new BacnetIntegration();
  i.setDeviceId(100001);
  i.setDeviceName("ChirpStack BACnet Gateway");
  i.setDeviceAddress("0.0.0.0");
  i.setDevicePort(47808);
  i.setObjectName("ChirpStack_Gateway");
  i.setVendorName("ChirpStack");
  i.setModelName("BACnet-LoRaWAN Bridge");

  return (
    <Card title="Add BACnet integration">
      <BacnetIntegrationForm initialValues={i} onFinish={onFinish} />
    </Card>
  );
}

export default CreateBacnetIntegration;

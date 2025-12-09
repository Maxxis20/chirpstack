import * as grpcWeb from 'grpc-web';

import * as api_fuota_pb from '../api/fuota_pb'; // proto import: "api/fuota.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class FuotaServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDeployment(
    request: api_fuota_pb.CreateFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.CreateFuotaDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.CreateFuotaDeploymentResponse>;

  getDeployment(
    request: api_fuota_pb.GetFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.GetFuotaDeploymentResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.GetFuotaDeploymentResponse>;

  updateDeployment(
    request: api_fuota_pb.UpdateFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteDeployment(
    request: api_fuota_pb.DeleteFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  startDeployment(
    request: api_fuota_pb.StartFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listDeployments(
    request: api_fuota_pb.ListFuotaDeploymentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.ListFuotaDeploymentsResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.ListFuotaDeploymentsResponse>;

  addDevices(
    request: api_fuota_pb.AddDevicesToFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeDevices(
    request: api_fuota_pb.RemoveDevicesFromFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listDevices(
    request: api_fuota_pb.ListFuotaDeploymentDevicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.ListFuotaDeploymentDevicesResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.ListFuotaDeploymentDevicesResponse>;

  addGateways(
    request: api_fuota_pb.AddGatewaysToFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listGateways(
    request: api_fuota_pb.ListFuotaDeploymentGatewaysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.ListFuotaDeploymentGatewaysResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.ListFuotaDeploymentGatewaysResponse>;

  removeGateways(
    request: api_fuota_pb.RemoveGatewaysFromFuotaDeploymentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listJobs(
    request: api_fuota_pb.ListFuotaDeploymentJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_fuota_pb.ListFuotaDeploymentJobsResponse) => void
  ): grpcWeb.ClientReadableStream<api_fuota_pb.ListFuotaDeploymentJobsResponse>;

}

export class FuotaServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDeployment(
    request: api_fuota_pb.CreateFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.CreateFuotaDeploymentResponse>;

  getDeployment(
    request: api_fuota_pb.GetFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.GetFuotaDeploymentResponse>;

  updateDeployment(
    request: api_fuota_pb.UpdateFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteDeployment(
    request: api_fuota_pb.DeleteFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  startDeployment(
    request: api_fuota_pb.StartFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listDeployments(
    request: api_fuota_pb.ListFuotaDeploymentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.ListFuotaDeploymentsResponse>;

  addDevices(
    request: api_fuota_pb.AddDevicesToFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  removeDevices(
    request: api_fuota_pb.RemoveDevicesFromFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listDevices(
    request: api_fuota_pb.ListFuotaDeploymentDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.ListFuotaDeploymentDevicesResponse>;

  addGateways(
    request: api_fuota_pb.AddGatewaysToFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listGateways(
    request: api_fuota_pb.ListFuotaDeploymentGatewaysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.ListFuotaDeploymentGatewaysResponse>;

  removeGateways(
    request: api_fuota_pb.RemoveGatewaysFromFuotaDeploymentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listJobs(
    request: api_fuota_pb.ListFuotaDeploymentJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_fuota_pb.ListFuotaDeploymentJobsResponse>;

}


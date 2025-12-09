import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as common_common_pb from '../common/common_pb'; // proto import: "common/common.proto"
import * as api_multicast_group_pb from '../api/multicast_group_pb'; // proto import: "api/multicast_group.proto"


export class FuotaDeployment extends jspb.Message {
  getId(): string;
  setId(value: string): FuotaDeployment;

  getApplicationId(): string;
  setApplicationId(value: string): FuotaDeployment;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): FuotaDeployment;

  getName(): string;
  setName(value: string): FuotaDeployment;

  getMulticastGroupType(): api_multicast_group_pb.MulticastGroupType;
  setMulticastGroupType(value: api_multicast_group_pb.MulticastGroupType): FuotaDeployment;

  getMulticastClassCSchedulingType(): api_multicast_group_pb.MulticastGroupSchedulingType;
  setMulticastClassCSchedulingType(value: api_multicast_group_pb.MulticastGroupSchedulingType): FuotaDeployment;

  getMulticastDr(): number;
  setMulticastDr(value: number): FuotaDeployment;

  getMulticastClassBPingSlotPeriodicity(): number;
  setMulticastClassBPingSlotPeriodicity(value: number): FuotaDeployment;

  getMulticastFrequency(): number;
  setMulticastFrequency(value: number): FuotaDeployment;

  getMulticastTimeout(): number;
  setMulticastTimeout(value: number): FuotaDeployment;

  getCalculateMulticastTimeout(): boolean;
  setCalculateMulticastTimeout(value: boolean): FuotaDeployment;

  getUnicastMaxRetryCount(): number;
  setUnicastMaxRetryCount(value: number): FuotaDeployment;

  getFragmentationFragmentSize(): number;
  setFragmentationFragmentSize(value: number): FuotaDeployment;

  getCalculateFragmentationFragmentSize(): boolean;
  setCalculateFragmentationFragmentSize(value: boolean): FuotaDeployment;

  getFragmentationRedundancyPercentage(): number;
  setFragmentationRedundancyPercentage(value: number): FuotaDeployment;

  getFragmentationSessionIndex(): number;
  setFragmentationSessionIndex(value: number): FuotaDeployment;

  getFragmentationMatrix(): number;
  setFragmentationMatrix(value: number): FuotaDeployment;

  getFragmentationBlockAckDelay(): number;
  setFragmentationBlockAckDelay(value: number): FuotaDeployment;

  getFragmentationDescriptor(): Uint8Array | string;
  getFragmentationDescriptor_asU8(): Uint8Array;
  getFragmentationDescriptor_asB64(): string;
  setFragmentationDescriptor(value: Uint8Array | string): FuotaDeployment;

  getRequestFragmentationSessionStatus(): RequestFragmentationSessionStatus;
  setRequestFragmentationSessionStatus(value: RequestFragmentationSessionStatus): FuotaDeployment;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): FuotaDeployment;

  getOnCompleteSetDeviceTagsMap(): jspb.Map<string, string>;
  clearOnCompleteSetDeviceTagsMap(): FuotaDeployment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuotaDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: FuotaDeployment): FuotaDeployment.AsObject;
  static serializeBinaryToWriter(message: FuotaDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuotaDeployment;
  static deserializeBinaryFromReader(message: FuotaDeployment, reader: jspb.BinaryReader): FuotaDeployment;
}

export namespace FuotaDeployment {
  export type AsObject = {
    id: string,
    applicationId: string,
    deviceProfileId: string,
    name: string,
    multicastGroupType: api_multicast_group_pb.MulticastGroupType,
    multicastClassCSchedulingType: api_multicast_group_pb.MulticastGroupSchedulingType,
    multicastDr: number,
    multicastClassBPingSlotPeriodicity: number,
    multicastFrequency: number,
    multicastTimeout: number,
    calculateMulticastTimeout: boolean,
    unicastMaxRetryCount: number,
    fragmentationFragmentSize: number,
    calculateFragmentationFragmentSize: boolean,
    fragmentationRedundancyPercentage: number,
    fragmentationSessionIndex: number,
    fragmentationMatrix: number,
    fragmentationBlockAckDelay: number,
    fragmentationDescriptor: Uint8Array | string,
    requestFragmentationSessionStatus: RequestFragmentationSessionStatus,
    payload: Uint8Array | string,
    onCompleteSetDeviceTagsMap: Array<[string, string]>,
  }
}

export class FuotaDeploymentListItem extends jspb.Message {
  getId(): string;
  setId(value: string): FuotaDeploymentListItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentListItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FuotaDeploymentListItem;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentListItem;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): FuotaDeploymentListItem;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentListItem;
  hasStartedAt(): boolean;
  clearStartedAt(): FuotaDeploymentListItem;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentListItem;
  hasCompletedAt(): boolean;
  clearCompletedAt(): FuotaDeploymentListItem;

  getName(): string;
  setName(value: string): FuotaDeploymentListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuotaDeploymentListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FuotaDeploymentListItem): FuotaDeploymentListItem.AsObject;
  static serializeBinaryToWriter(message: FuotaDeploymentListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuotaDeploymentListItem;
  static deserializeBinaryFromReader(message: FuotaDeploymentListItem, reader: jspb.BinaryReader): FuotaDeploymentListItem;
}

export namespace FuotaDeploymentListItem {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
  }
}

export class FuotaDeploymentDeviceListItem extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): FuotaDeploymentDeviceListItem;

  getDevEui(): string;
  setDevEui(value: string): FuotaDeploymentDeviceListItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FuotaDeploymentDeviceListItem;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasCompletedAt(): boolean;
  clearCompletedAt(): FuotaDeploymentDeviceListItem;

  getMcGroupSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcGroupSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasMcGroupSetupCompletedAt(): boolean;
  clearMcGroupSetupCompletedAt(): FuotaDeploymentDeviceListItem;

  getMcSessionCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcSessionCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasMcSessionCompletedAt(): boolean;
  clearMcSessionCompletedAt(): FuotaDeploymentDeviceListItem;

  getFragSessionSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragSessionSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasFragSessionSetupCompletedAt(): boolean;
  clearFragSessionSetupCompletedAt(): FuotaDeploymentDeviceListItem;

  getFragStatusCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragStatusCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentDeviceListItem;
  hasFragStatusCompletedAt(): boolean;
  clearFragStatusCompletedAt(): FuotaDeploymentDeviceListItem;

  getErrorMsg(): string;
  setErrorMsg(value: string): FuotaDeploymentDeviceListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuotaDeploymentDeviceListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FuotaDeploymentDeviceListItem): FuotaDeploymentDeviceListItem.AsObject;
  static serializeBinaryToWriter(message: FuotaDeploymentDeviceListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuotaDeploymentDeviceListItem;
  static deserializeBinaryFromReader(message: FuotaDeploymentDeviceListItem, reader: jspb.BinaryReader): FuotaDeploymentDeviceListItem;
}

export namespace FuotaDeploymentDeviceListItem {
  export type AsObject = {
    fuotaDeploymentId: string,
    devEui: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcGroupSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcSessionCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragSessionSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragStatusCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorMsg: string,
  }
}

export class FuotaDeploymentGatewayListItem extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): FuotaDeploymentGatewayListItem;

  getGatewayId(): string;
  setGatewayId(value: string): FuotaDeploymentGatewayListItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentGatewayListItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FuotaDeploymentGatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuotaDeploymentGatewayListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FuotaDeploymentGatewayListItem): FuotaDeploymentGatewayListItem.AsObject;
  static serializeBinaryToWriter(message: FuotaDeploymentGatewayListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuotaDeploymentGatewayListItem;
  static deserializeBinaryFromReader(message: FuotaDeploymentGatewayListItem, reader: jspb.BinaryReader): FuotaDeploymentGatewayListItem;
}

export namespace FuotaDeploymentGatewayListItem {
  export type AsObject = {
    fuotaDeploymentId: string,
    gatewayId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateFuotaDeploymentRequest extends jspb.Message {
  getDeployment(): FuotaDeployment | undefined;
  setDeployment(value?: FuotaDeployment): CreateFuotaDeploymentRequest;
  hasDeployment(): boolean;
  clearDeployment(): CreateFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFuotaDeploymentRequest): CreateFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateFuotaDeploymentRequest, reader: jspb.BinaryReader): CreateFuotaDeploymentRequest;
}

export namespace CreateFuotaDeploymentRequest {
  export type AsObject = {
    deployment?: FuotaDeployment.AsObject,
  }
}

export class CreateFuotaDeploymentResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateFuotaDeploymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFuotaDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFuotaDeploymentResponse): CreateFuotaDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFuotaDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFuotaDeploymentResponse;
  static deserializeBinaryFromReader(message: CreateFuotaDeploymentResponse, reader: jspb.BinaryReader): CreateFuotaDeploymentResponse;
}

export namespace CreateFuotaDeploymentResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetFuotaDeploymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuotaDeploymentRequest): GetFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: GetFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: GetFuotaDeploymentRequest, reader: jspb.BinaryReader): GetFuotaDeploymentRequest;
}

export namespace GetFuotaDeploymentRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFuotaDeploymentResponse extends jspb.Message {
  getDeployment(): FuotaDeployment | undefined;
  setDeployment(value?: FuotaDeployment): GetFuotaDeploymentResponse;
  hasDeployment(): boolean;
  clearDeployment(): GetFuotaDeploymentResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetFuotaDeploymentResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetFuotaDeploymentResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetFuotaDeploymentResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GetFuotaDeploymentResponse;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetFuotaDeploymentResponse;
  hasStartedAt(): boolean;
  clearStartedAt(): GetFuotaDeploymentResponse;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetFuotaDeploymentResponse;
  hasCompletedAt(): boolean;
  clearCompletedAt(): GetFuotaDeploymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuotaDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuotaDeploymentResponse): GetFuotaDeploymentResponse.AsObject;
  static serializeBinaryToWriter(message: GetFuotaDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuotaDeploymentResponse;
  static deserializeBinaryFromReader(message: GetFuotaDeploymentResponse, reader: jspb.BinaryReader): GetFuotaDeploymentResponse;
}

export namespace GetFuotaDeploymentResponse {
  export type AsObject = {
    deployment?: FuotaDeployment.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateFuotaDeploymentRequest extends jspb.Message {
  getDeployment(): FuotaDeployment | undefined;
  setDeployment(value?: FuotaDeployment): UpdateFuotaDeploymentRequest;
  hasDeployment(): boolean;
  clearDeployment(): UpdateFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFuotaDeploymentRequest): UpdateFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: UpdateFuotaDeploymentRequest, reader: jspb.BinaryReader): UpdateFuotaDeploymentRequest;
}

export namespace UpdateFuotaDeploymentRequest {
  export type AsObject = {
    deployment?: FuotaDeployment.AsObject,
  }
}

export class DeleteFuotaDeploymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFuotaDeploymentRequest): DeleteFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: DeleteFuotaDeploymentRequest, reader: jspb.BinaryReader): DeleteFuotaDeploymentRequest;
}

export namespace DeleteFuotaDeploymentRequest {
  export type AsObject = {
    id: string,
  }
}

export class StartFuotaDeploymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StartFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartFuotaDeploymentRequest): StartFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: StartFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: StartFuotaDeploymentRequest, reader: jspb.BinaryReader): StartFuotaDeploymentRequest;
}

export namespace StartFuotaDeploymentRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListFuotaDeploymentsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListFuotaDeploymentsRequest;

  getOffset(): number;
  setOffset(value: number): ListFuotaDeploymentsRequest;

  getApplicationId(): string;
  setApplicationId(value: string): ListFuotaDeploymentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentsRequest): ListFuotaDeploymentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentsRequest;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentsRequest, reader: jspb.BinaryReader): ListFuotaDeploymentsRequest;
}

export namespace ListFuotaDeploymentsRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    applicationId: string,
  }
}

export class ListFuotaDeploymentsResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): ListFuotaDeploymentsResponse;

  getResultList(): Array<FuotaDeploymentListItem>;
  setResultList(value: Array<FuotaDeploymentListItem>): ListFuotaDeploymentsResponse;
  clearResultList(): ListFuotaDeploymentsResponse;
  addResult(value?: FuotaDeploymentListItem, index?: number): FuotaDeploymentListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentsResponse): ListFuotaDeploymentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentsResponse;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentsResponse, reader: jspb.BinaryReader): ListFuotaDeploymentsResponse;
}

export namespace ListFuotaDeploymentsResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<FuotaDeploymentListItem.AsObject>,
  }
}

export class AddDevicesToFuotaDeploymentRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): AddDevicesToFuotaDeploymentRequest;

  getDevEuisList(): Array<string>;
  setDevEuisList(value: Array<string>): AddDevicesToFuotaDeploymentRequest;
  clearDevEuisList(): AddDevicesToFuotaDeploymentRequest;
  addDevEuis(value: string, index?: number): AddDevicesToFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDevicesToFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDevicesToFuotaDeploymentRequest): AddDevicesToFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: AddDevicesToFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDevicesToFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: AddDevicesToFuotaDeploymentRequest, reader: jspb.BinaryReader): AddDevicesToFuotaDeploymentRequest;
}

export namespace AddDevicesToFuotaDeploymentRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    devEuisList: Array<string>,
  }
}

export class RemoveDevicesFromFuotaDeploymentRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): RemoveDevicesFromFuotaDeploymentRequest;

  getDevEuisList(): Array<string>;
  setDevEuisList(value: Array<string>): RemoveDevicesFromFuotaDeploymentRequest;
  clearDevEuisList(): RemoveDevicesFromFuotaDeploymentRequest;
  addDevEuis(value: string, index?: number): RemoveDevicesFromFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDevicesFromFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDevicesFromFuotaDeploymentRequest): RemoveDevicesFromFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveDevicesFromFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDevicesFromFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: RemoveDevicesFromFuotaDeploymentRequest, reader: jspb.BinaryReader): RemoveDevicesFromFuotaDeploymentRequest;
}

export namespace RemoveDevicesFromFuotaDeploymentRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    devEuisList: Array<string>,
  }
}

export class ListFuotaDeploymentDevicesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListFuotaDeploymentDevicesRequest;

  getOffset(): number;
  setOffset(value: number): ListFuotaDeploymentDevicesRequest;

  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): ListFuotaDeploymentDevicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentDevicesRequest): ListFuotaDeploymentDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentDevicesRequest;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentDevicesRequest, reader: jspb.BinaryReader): ListFuotaDeploymentDevicesRequest;
}

export namespace ListFuotaDeploymentDevicesRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    fuotaDeploymentId: string,
  }
}

export class ListFuotaDeploymentDevicesResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): ListFuotaDeploymentDevicesResponse;

  getResultList(): Array<FuotaDeploymentDeviceListItem>;
  setResultList(value: Array<FuotaDeploymentDeviceListItem>): ListFuotaDeploymentDevicesResponse;
  clearResultList(): ListFuotaDeploymentDevicesResponse;
  addResult(value?: FuotaDeploymentDeviceListItem, index?: number): FuotaDeploymentDeviceListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentDevicesResponse): ListFuotaDeploymentDevicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentDevicesResponse;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentDevicesResponse, reader: jspb.BinaryReader): ListFuotaDeploymentDevicesResponse;
}

export namespace ListFuotaDeploymentDevicesResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<FuotaDeploymentDeviceListItem.AsObject>,
  }
}

export class AddGatewaysToFuotaDeploymentRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): AddGatewaysToFuotaDeploymentRequest;

  getGatewayIdsList(): Array<string>;
  setGatewayIdsList(value: Array<string>): AddGatewaysToFuotaDeploymentRequest;
  clearGatewayIdsList(): AddGatewaysToFuotaDeploymentRequest;
  addGatewayIds(value: string, index?: number): AddGatewaysToFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGatewaysToFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGatewaysToFuotaDeploymentRequest): AddGatewaysToFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: AddGatewaysToFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGatewaysToFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: AddGatewaysToFuotaDeploymentRequest, reader: jspb.BinaryReader): AddGatewaysToFuotaDeploymentRequest;
}

export namespace AddGatewaysToFuotaDeploymentRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    gatewayIdsList: Array<string>,
  }
}

export class RemoveGatewaysFromFuotaDeploymentRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): RemoveGatewaysFromFuotaDeploymentRequest;

  getGatewayIdsList(): Array<string>;
  setGatewayIdsList(value: Array<string>): RemoveGatewaysFromFuotaDeploymentRequest;
  clearGatewayIdsList(): RemoveGatewaysFromFuotaDeploymentRequest;
  addGatewayIds(value: string, index?: number): RemoveGatewaysFromFuotaDeploymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGatewaysFromFuotaDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGatewaysFromFuotaDeploymentRequest): RemoveGatewaysFromFuotaDeploymentRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveGatewaysFromFuotaDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGatewaysFromFuotaDeploymentRequest;
  static deserializeBinaryFromReader(message: RemoveGatewaysFromFuotaDeploymentRequest, reader: jspb.BinaryReader): RemoveGatewaysFromFuotaDeploymentRequest;
}

export namespace RemoveGatewaysFromFuotaDeploymentRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    gatewayIdsList: Array<string>,
  }
}

export class ListFuotaDeploymentGatewaysRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListFuotaDeploymentGatewaysRequest;

  getOffset(): number;
  setOffset(value: number): ListFuotaDeploymentGatewaysRequest;

  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): ListFuotaDeploymentGatewaysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentGatewaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentGatewaysRequest): ListFuotaDeploymentGatewaysRequest.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentGatewaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentGatewaysRequest;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentGatewaysRequest, reader: jspb.BinaryReader): ListFuotaDeploymentGatewaysRequest;
}

export namespace ListFuotaDeploymentGatewaysRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    fuotaDeploymentId: string,
  }
}

export class ListFuotaDeploymentGatewaysResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): ListFuotaDeploymentGatewaysResponse;

  getResultList(): Array<FuotaDeploymentGatewayListItem>;
  setResultList(value: Array<FuotaDeploymentGatewayListItem>): ListFuotaDeploymentGatewaysResponse;
  clearResultList(): ListFuotaDeploymentGatewaysResponse;
  addResult(value?: FuotaDeploymentGatewayListItem, index?: number): FuotaDeploymentGatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentGatewaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentGatewaysResponse): ListFuotaDeploymentGatewaysResponse.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentGatewaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentGatewaysResponse;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentGatewaysResponse, reader: jspb.BinaryReader): ListFuotaDeploymentGatewaysResponse;
}

export namespace ListFuotaDeploymentGatewaysResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<FuotaDeploymentGatewayListItem.AsObject>,
  }
}

export class ListFuotaDeploymentJobsRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): ListFuotaDeploymentJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentJobsRequest): ListFuotaDeploymentJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentJobsRequest;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentJobsRequest, reader: jspb.BinaryReader): ListFuotaDeploymentJobsRequest;
}

export namespace ListFuotaDeploymentJobsRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
  }
}

export class ListFuotaDeploymentJobsResponse extends jspb.Message {
  getJobsList(): Array<FuotaDeploymentJob>;
  setJobsList(value: Array<FuotaDeploymentJob>): ListFuotaDeploymentJobsResponse;
  clearJobsList(): ListFuotaDeploymentJobsResponse;
  addJobs(value?: FuotaDeploymentJob, index?: number): FuotaDeploymentJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFuotaDeploymentJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFuotaDeploymentJobsResponse): ListFuotaDeploymentJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFuotaDeploymentJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFuotaDeploymentJobsResponse;
  static deserializeBinaryFromReader(message: ListFuotaDeploymentJobsResponse, reader: jspb.BinaryReader): ListFuotaDeploymentJobsResponse;
}

export namespace ListFuotaDeploymentJobsResponse {
  export type AsObject = {
    jobsList: Array<FuotaDeploymentJob.AsObject>,
  }
}

export class FuotaDeploymentJob extends jspb.Message {
  getJob(): string;
  setJob(value: string): FuotaDeploymentJob;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentJob;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FuotaDeploymentJob;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentJob;
  hasCompletedAt(): boolean;
  clearCompletedAt(): FuotaDeploymentJob;

  getMaxRetryCount(): number;
  setMaxRetryCount(value: number): FuotaDeploymentJob;

  getAttemptCount(): number;
  setAttemptCount(value: number): FuotaDeploymentJob;

  getSchedulerRunAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSchedulerRunAfter(value?: google_protobuf_timestamp_pb.Timestamp): FuotaDeploymentJob;
  hasSchedulerRunAfter(): boolean;
  clearSchedulerRunAfter(): FuotaDeploymentJob;

  getWarningMsg(): string;
  setWarningMsg(value: string): FuotaDeploymentJob;

  getErrorMsg(): string;
  setErrorMsg(value: string): FuotaDeploymentJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuotaDeploymentJob.AsObject;
  static toObject(includeInstance: boolean, msg: FuotaDeploymentJob): FuotaDeploymentJob.AsObject;
  static serializeBinaryToWriter(message: FuotaDeploymentJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuotaDeploymentJob;
  static deserializeBinaryFromReader(message: FuotaDeploymentJob, reader: jspb.BinaryReader): FuotaDeploymentJob;
}

export namespace FuotaDeploymentJob {
  export type AsObject = {
    job: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxRetryCount: number,
    attemptCount: number,
    schedulerRunAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    warningMsg: string,
    errorMsg: string,
  }
}

export enum RequestFragmentationSessionStatus { 
  NO_REQUEST = 0,
  AFTER_FRAGMENT_ENQUEUE = 1,
  AFTER_SESSION_TIMEOUT = 2,
}

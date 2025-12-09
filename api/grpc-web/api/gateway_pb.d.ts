import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as common_common_pb from '../common/common_pb'; // proto import: "common/common.proto"


export class Gateway extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): Gateway;

  getName(): string;
  setName(value: string): Gateway;

  getDescription(): string;
  setDescription(value: string): Gateway;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): Gateway;
  hasLocation(): boolean;
  clearLocation(): Gateway;

  getTenantId(): string;
  setTenantId(value: string): Gateway;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): Gateway;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Gateway;

  getStatsInterval(): number;
  setStatsInterval(value: number): Gateway;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gateway.AsObject;
  static toObject(includeInstance: boolean, msg: Gateway): Gateway.AsObject;
  static serializeBinaryToWriter(message: Gateway, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gateway;
  static deserializeBinaryFromReader(message: Gateway, reader: jspb.BinaryReader): Gateway;
}

export namespace Gateway {
  export type AsObject = {
    gatewayId: string,
    name: string,
    description: string,
    location?: common_common_pb.Location.AsObject,
    tenantId: string,
    tagsMap: Array<[string, string]>,
    metadataMap: Array<[string, string]>,
    statsInterval: number,
  }
}

export class GatewayListItem extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): GatewayListItem;

  getGatewayId(): string;
  setGatewayId(value: string): GatewayListItem;

  getName(): string;
  setName(value: string): GatewayListItem;

  getDescription(): string;
  setDescription(value: string): GatewayListItem;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): GatewayListItem;
  hasLocation(): boolean;
  clearLocation(): GatewayListItem;

  getPropertiesMap(): jspb.Map<string, string>;
  clearPropertiesMap(): GatewayListItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GatewayListItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GatewayListItem;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GatewayListItem;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GatewayListItem;

  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): GatewayListItem;
  hasLastSeenAt(): boolean;
  clearLastSeenAt(): GatewayListItem;

  getState(): GatewayState;
  setState(value: GatewayState): GatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayListItem.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayListItem): GatewayListItem.AsObject;
  static serializeBinaryToWriter(message: GatewayListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayListItem;
  static deserializeBinaryFromReader(message: GatewayListItem, reader: jspb.BinaryReader): GatewayListItem;
}

export namespace GatewayListItem {
  export type AsObject = {
    tenantId: string,
    gatewayId: string,
    name: string,
    description: string,
    location?: common_common_pb.Location.AsObject,
    propertiesMap: Array<[string, string]>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: GatewayState,
  }
}

export class CreateGatewayRequest extends jspb.Message {
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): CreateGatewayRequest;
  hasGateway(): boolean;
  clearGateway(): CreateGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGatewayRequest): CreateGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGatewayRequest;
  static deserializeBinaryFromReader(message: CreateGatewayRequest, reader: jspb.BinaryReader): CreateGatewayRequest;
}

export namespace CreateGatewayRequest {
  export type AsObject = {
    gateway?: Gateway.AsObject,
  }
}

export class GetGatewayRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): GetGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayRequest): GetGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayRequest;
  static deserializeBinaryFromReader(message: GetGatewayRequest, reader: jspb.BinaryReader): GetGatewayRequest;
}

export namespace GetGatewayRequest {
  export type AsObject = {
    gatewayId: string,
  }
}

export class GetGatewayResponse extends jspb.Message {
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): GetGatewayResponse;
  hasGateway(): boolean;
  clearGateway(): GetGatewayResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetGatewayResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GetGatewayResponse;

  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayResponse;
  hasLastSeenAt(): boolean;
  clearLastSeenAt(): GetGatewayResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayResponse): GetGatewayResponse.AsObject;
  static serializeBinaryToWriter(message: GetGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayResponse;
  static deserializeBinaryFromReader(message: GetGatewayResponse, reader: jspb.BinaryReader): GetGatewayResponse;
}

export namespace GetGatewayResponse {
  export type AsObject = {
    gateway?: Gateway.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateGatewayRequest extends jspb.Message {
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): UpdateGatewayRequest;
  hasGateway(): boolean;
  clearGateway(): UpdateGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGatewayRequest): UpdateGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGatewayRequest;
  static deserializeBinaryFromReader(message: UpdateGatewayRequest, reader: jspb.BinaryReader): UpdateGatewayRequest;
}

export namespace UpdateGatewayRequest {
  export type AsObject = {
    gateway?: Gateway.AsObject,
  }
}

export class DeleteGatewayRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): DeleteGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGatewayRequest): DeleteGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGatewayRequest;
  static deserializeBinaryFromReader(message: DeleteGatewayRequest, reader: jspb.BinaryReader): DeleteGatewayRequest;
}

export namespace DeleteGatewayRequest {
  export type AsObject = {
    gatewayId: string,
  }
}

export class ListGatewaysRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListGatewaysRequest;

  getOffset(): number;
  setOffset(value: number): ListGatewaysRequest;

  getSearch(): string;
  setSearch(value: string): ListGatewaysRequest;

  getTenantId(): string;
  setTenantId(value: string): ListGatewaysRequest;

  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): ListGatewaysRequest;

  getOrderBy(): ListGatewaysRequest.OrderBy;
  setOrderBy(value: ListGatewaysRequest.OrderBy): ListGatewaysRequest;

  getOrderByDesc(): boolean;
  setOrderByDesc(value: boolean): ListGatewaysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewaysRequest): ListGatewaysRequest.AsObject;
  static serializeBinaryToWriter(message: ListGatewaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewaysRequest;
  static deserializeBinaryFromReader(message: ListGatewaysRequest, reader: jspb.BinaryReader): ListGatewaysRequest;
}

export namespace ListGatewaysRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    search: string,
    tenantId: string,
    multicastGroupId: string,
    orderBy: ListGatewaysRequest.OrderBy,
    orderByDesc: boolean,
  }

  export enum OrderBy { 
    NAME = 0,
    GATEWAY_ID = 1,
    LAST_SEEN_AT = 2,
  }
}

export class ListGatewaysResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): ListGatewaysResponse;

  getResultList(): Array<GatewayListItem>;
  setResultList(value: Array<GatewayListItem>): ListGatewaysResponse;
  clearResultList(): ListGatewaysResponse;
  addResult(value?: GatewayListItem, index?: number): GatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewaysResponse): ListGatewaysResponse.AsObject;
  static serializeBinaryToWriter(message: ListGatewaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewaysResponse;
  static deserializeBinaryFromReader(message: ListGatewaysResponse, reader: jspb.BinaryReader): ListGatewaysResponse;
}

export namespace ListGatewaysResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<GatewayListItem.AsObject>,
  }
}

export class GenerateGatewayClientCertificateRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): GenerateGatewayClientCertificateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateGatewayClientCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateGatewayClientCertificateRequest): GenerateGatewayClientCertificateRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateGatewayClientCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateGatewayClientCertificateRequest;
  static deserializeBinaryFromReader(message: GenerateGatewayClientCertificateRequest, reader: jspb.BinaryReader): GenerateGatewayClientCertificateRequest;
}

export namespace GenerateGatewayClientCertificateRequest {
  export type AsObject = {
    gatewayId: string,
  }
}

export class GenerateGatewayClientCertificateResponse extends jspb.Message {
  getTlsCert(): string;
  setTlsCert(value: string): GenerateGatewayClientCertificateResponse;

  getTlsKey(): string;
  setTlsKey(value: string): GenerateGatewayClientCertificateResponse;

  getCaCert(): string;
  setCaCert(value: string): GenerateGatewayClientCertificateResponse;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): GenerateGatewayClientCertificateResponse;
  hasExpiresAt(): boolean;
  clearExpiresAt(): GenerateGatewayClientCertificateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateGatewayClientCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateGatewayClientCertificateResponse): GenerateGatewayClientCertificateResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateGatewayClientCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateGatewayClientCertificateResponse;
  static deserializeBinaryFromReader(message: GenerateGatewayClientCertificateResponse, reader: jspb.BinaryReader): GenerateGatewayClientCertificateResponse;
}

export namespace GenerateGatewayClientCertificateResponse {
  export type AsObject = {
    tlsCert: string,
    tlsKey: string,
    caCert: string,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetGatewayMetricsRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): GetGatewayMetricsRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayMetricsRequest;
  hasStart(): boolean;
  clearStart(): GetGatewayMetricsRequest;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayMetricsRequest;
  hasEnd(): boolean;
  clearEnd(): GetGatewayMetricsRequest;

  getAggregation(): common_common_pb.Aggregation;
  setAggregation(value: common_common_pb.Aggregation): GetGatewayMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayMetricsRequest): GetGatewayMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayMetricsRequest;
  static deserializeBinaryFromReader(message: GetGatewayMetricsRequest, reader: jspb.BinaryReader): GetGatewayMetricsRequest;
}

export namespace GetGatewayMetricsRequest {
  export type AsObject = {
    gatewayId: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aggregation: common_common_pb.Aggregation,
  }
}

export class GetGatewayMetricsResponse extends jspb.Message {
  getRxPackets(): common_common_pb.Metric | undefined;
  setRxPackets(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasRxPackets(): boolean;
  clearRxPackets(): GetGatewayMetricsResponse;

  getTxPackets(): common_common_pb.Metric | undefined;
  setTxPackets(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasTxPackets(): boolean;
  clearTxPackets(): GetGatewayMetricsResponse;

  getTxPacketsPerFreq(): common_common_pb.Metric | undefined;
  setTxPacketsPerFreq(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasTxPacketsPerFreq(): boolean;
  clearTxPacketsPerFreq(): GetGatewayMetricsResponse;

  getRxPacketsPerFreq(): common_common_pb.Metric | undefined;
  setRxPacketsPerFreq(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasRxPacketsPerFreq(): boolean;
  clearRxPacketsPerFreq(): GetGatewayMetricsResponse;

  getTxPacketsPerDr(): common_common_pb.Metric | undefined;
  setTxPacketsPerDr(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasTxPacketsPerDr(): boolean;
  clearTxPacketsPerDr(): GetGatewayMetricsResponse;

  getRxPacketsPerDr(): common_common_pb.Metric | undefined;
  setRxPacketsPerDr(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasRxPacketsPerDr(): boolean;
  clearRxPacketsPerDr(): GetGatewayMetricsResponse;

  getTxPacketsPerStatus(): common_common_pb.Metric | undefined;
  setTxPacketsPerStatus(value?: common_common_pb.Metric): GetGatewayMetricsResponse;
  hasTxPacketsPerStatus(): boolean;
  clearTxPacketsPerStatus(): GetGatewayMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayMetricsResponse): GetGatewayMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: GetGatewayMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayMetricsResponse;
  static deserializeBinaryFromReader(message: GetGatewayMetricsResponse, reader: jspb.BinaryReader): GetGatewayMetricsResponse;
}

export namespace GetGatewayMetricsResponse {
  export type AsObject = {
    rxPackets?: common_common_pb.Metric.AsObject,
    txPackets?: common_common_pb.Metric.AsObject,
    txPacketsPerFreq?: common_common_pb.Metric.AsObject,
    rxPacketsPerFreq?: common_common_pb.Metric.AsObject,
    txPacketsPerDr?: common_common_pb.Metric.AsObject,
    rxPacketsPerDr?: common_common_pb.Metric.AsObject,
    txPacketsPerStatus?: common_common_pb.Metric.AsObject,
  }
}

export class GetGatewayDutyCycleMetricsRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): GetGatewayDutyCycleMetricsRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayDutyCycleMetricsRequest;
  hasStart(): boolean;
  clearStart(): GetGatewayDutyCycleMetricsRequest;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetGatewayDutyCycleMetricsRequest;
  hasEnd(): boolean;
  clearEnd(): GetGatewayDutyCycleMetricsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayDutyCycleMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayDutyCycleMetricsRequest): GetGatewayDutyCycleMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayDutyCycleMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayDutyCycleMetricsRequest;
  static deserializeBinaryFromReader(message: GetGatewayDutyCycleMetricsRequest, reader: jspb.BinaryReader): GetGatewayDutyCycleMetricsRequest;
}

export namespace GetGatewayDutyCycleMetricsRequest {
  export type AsObject = {
    gatewayId: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetGatewayDutyCycleMetricsResponse extends jspb.Message {
  getMaxLoadPercentage(): common_common_pb.Metric | undefined;
  setMaxLoadPercentage(value?: common_common_pb.Metric): GetGatewayDutyCycleMetricsResponse;
  hasMaxLoadPercentage(): boolean;
  clearMaxLoadPercentage(): GetGatewayDutyCycleMetricsResponse;

  getWindowPercentage(): common_common_pb.Metric | undefined;
  setWindowPercentage(value?: common_common_pb.Metric): GetGatewayDutyCycleMetricsResponse;
  hasWindowPercentage(): boolean;
  clearWindowPercentage(): GetGatewayDutyCycleMetricsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayDutyCycleMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayDutyCycleMetricsResponse): GetGatewayDutyCycleMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: GetGatewayDutyCycleMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayDutyCycleMetricsResponse;
  static deserializeBinaryFromReader(message: GetGatewayDutyCycleMetricsResponse, reader: jspb.BinaryReader): GetGatewayDutyCycleMetricsResponse;
}

export namespace GetGatewayDutyCycleMetricsResponse {
  export type AsObject = {
    maxLoadPercentage?: common_common_pb.Metric.AsObject,
    windowPercentage?: common_common_pb.Metric.AsObject,
  }
}

export class GetRelayGatewayRequest extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): GetRelayGatewayRequest;

  getRelayId(): string;
  setRelayId(value: string): GetRelayGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelayGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelayGatewayRequest): GetRelayGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: GetRelayGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelayGatewayRequest;
  static deserializeBinaryFromReader(message: GetRelayGatewayRequest, reader: jspb.BinaryReader): GetRelayGatewayRequest;
}

export namespace GetRelayGatewayRequest {
  export type AsObject = {
    tenantId: string,
    relayId: string,
  }
}

export class GetRelayGatewayResponse extends jspb.Message {
  getRelayGateway(): RelayGateway | undefined;
  setRelayGateway(value?: RelayGateway): GetRelayGatewayResponse;
  hasRelayGateway(): boolean;
  clearRelayGateway(): GetRelayGatewayResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetRelayGatewayResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetRelayGatewayResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetRelayGatewayResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GetRelayGatewayResponse;

  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): GetRelayGatewayResponse;
  hasLastSeenAt(): boolean;
  clearLastSeenAt(): GetRelayGatewayResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRelayGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRelayGatewayResponse): GetRelayGatewayResponse.AsObject;
  static serializeBinaryToWriter(message: GetRelayGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRelayGatewayResponse;
  static deserializeBinaryFromReader(message: GetRelayGatewayResponse, reader: jspb.BinaryReader): GetRelayGatewayResponse;
}

export namespace GetRelayGatewayResponse {
  export type AsObject = {
    relayGateway?: RelayGateway.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListRelayGatewaysRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListRelayGatewaysRequest;

  getOffset(): number;
  setOffset(value: number): ListRelayGatewaysRequest;

  getTenantId(): string;
  setTenantId(value: string): ListRelayGatewaysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelayGatewaysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelayGatewaysRequest): ListRelayGatewaysRequest.AsObject;
  static serializeBinaryToWriter(message: ListRelayGatewaysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelayGatewaysRequest;
  static deserializeBinaryFromReader(message: ListRelayGatewaysRequest, reader: jspb.BinaryReader): ListRelayGatewaysRequest;
}

export namespace ListRelayGatewaysRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    tenantId: string,
  }
}

export class ListRelayGatewaysResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): ListRelayGatewaysResponse;

  getResultList(): Array<RelayGatewayListItem>;
  setResultList(value: Array<RelayGatewayListItem>): ListRelayGatewaysResponse;
  clearResultList(): ListRelayGatewaysResponse;
  addResult(value?: RelayGatewayListItem, index?: number): RelayGatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRelayGatewaysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRelayGatewaysResponse): ListRelayGatewaysResponse.AsObject;
  static serializeBinaryToWriter(message: ListRelayGatewaysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRelayGatewaysResponse;
  static deserializeBinaryFromReader(message: ListRelayGatewaysResponse, reader: jspb.BinaryReader): ListRelayGatewaysResponse;
}

export namespace ListRelayGatewaysResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<RelayGatewayListItem.AsObject>,
  }
}

export class RelayGatewayListItem extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): RelayGatewayListItem;

  getRelayId(): string;
  setRelayId(value: string): RelayGatewayListItem;

  getName(): string;
  setName(value: string): RelayGatewayListItem;

  getDescription(): string;
  setDescription(value: string): RelayGatewayListItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RelayGatewayListItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): RelayGatewayListItem;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RelayGatewayListItem;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): RelayGatewayListItem;

  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): RelayGatewayListItem;
  hasLastSeenAt(): boolean;
  clearLastSeenAt(): RelayGatewayListItem;

  getState(): GatewayState;
  setState(value: GatewayState): RelayGatewayListItem;

  getRegionConfigId(): string;
  setRegionConfigId(value: string): RelayGatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelayGatewayListItem.AsObject;
  static toObject(includeInstance: boolean, msg: RelayGatewayListItem): RelayGatewayListItem.AsObject;
  static serializeBinaryToWriter(message: RelayGatewayListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelayGatewayListItem;
  static deserializeBinaryFromReader(message: RelayGatewayListItem, reader: jspb.BinaryReader): RelayGatewayListItem;
}

export namespace RelayGatewayListItem {
  export type AsObject = {
    tenantId: string,
    relayId: string,
    name: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: GatewayState,
    regionConfigId: string,
  }
}

export class UpdateRelayGatewayRequest extends jspb.Message {
  getRelayGateway(): RelayGateway | undefined;
  setRelayGateway(value?: RelayGateway): UpdateRelayGatewayRequest;
  hasRelayGateway(): boolean;
  clearRelayGateway(): UpdateRelayGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRelayGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRelayGatewayRequest): UpdateRelayGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRelayGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRelayGatewayRequest;
  static deserializeBinaryFromReader(message: UpdateRelayGatewayRequest, reader: jspb.BinaryReader): UpdateRelayGatewayRequest;
}

export namespace UpdateRelayGatewayRequest {
  export type AsObject = {
    relayGateway?: RelayGateway.AsObject,
  }
}

export class DeleteRelayGatewayRequest extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): DeleteRelayGatewayRequest;

  getRelayId(): string;
  setRelayId(value: string): DeleteRelayGatewayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRelayGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRelayGatewayRequest): DeleteRelayGatewayRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRelayGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRelayGatewayRequest;
  static deserializeBinaryFromReader(message: DeleteRelayGatewayRequest, reader: jspb.BinaryReader): DeleteRelayGatewayRequest;
}

export namespace DeleteRelayGatewayRequest {
  export type AsObject = {
    tenantId: string,
    relayId: string,
  }
}

export class RelayGateway extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): RelayGateway;

  getRelayId(): string;
  setRelayId(value: string): RelayGateway;

  getName(): string;
  setName(value: string): RelayGateway;

  getDescription(): string;
  setDescription(value: string): RelayGateway;

  getStatsInterval(): number;
  setStatsInterval(value: number): RelayGateway;

  getRegionConfigId(): string;
  setRegionConfigId(value: string): RelayGateway;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelayGateway.AsObject;
  static toObject(includeInstance: boolean, msg: RelayGateway): RelayGateway.AsObject;
  static serializeBinaryToWriter(message: RelayGateway, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelayGateway;
  static deserializeBinaryFromReader(message: RelayGateway, reader: jspb.BinaryReader): RelayGateway;
}

export namespace RelayGateway {
  export type AsObject = {
    tenantId: string,
    relayId: string,
    name: string,
    description: string,
    statsInterval: number,
    regionConfigId: string,
  }
}

export enum GatewayState { 
  NEVER_SEEN = 0,
  ONLINE = 1,
  OFFLINE = 2,
}

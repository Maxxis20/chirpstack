import * as jspb from 'google-protobuf'

import * as common_common_pb from '../common/common_pb'; // proto import: "common/common.proto"
import * as gw_gw_pb from '../gw/gw_pb'; // proto import: "gw/gw.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class DeviceInfo extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): DeviceInfo;

  getTenantName(): string;
  setTenantName(value: string): DeviceInfo;

  getApplicationId(): string;
  setApplicationId(value: string): DeviceInfo;

  getApplicationName(): string;
  setApplicationName(value: string): DeviceInfo;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): DeviceInfo;

  getDeviceProfileName(): string;
  setDeviceProfileName(value: string): DeviceInfo;

  getDeviceName(): string;
  setDeviceName(value: string): DeviceInfo;

  getDevEui(): string;
  setDevEui(value: string): DeviceInfo;

  getDeviceClassEnabled(): common_common_pb.DeviceClass;
  setDeviceClassEnabled(value: common_common_pb.DeviceClass): DeviceInfo;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    tenantId: string,
    tenantName: string,
    applicationId: string,
    applicationName: string,
    deviceProfileId: string,
    deviceProfileName: string,
    deviceName: string,
    devEui: string,
    deviceClassEnabled: common_common_pb.DeviceClass,
    tagsMap: Array<[string, string]>,
  }
}

export class UplinkRelayRxInfo extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): UplinkRelayRxInfo;

  getFrequency(): number;
  setFrequency(value: number): UplinkRelayRxInfo;

  getDr(): number;
  setDr(value: number): UplinkRelayRxInfo;

  getSnr(): number;
  setSnr(value: number): UplinkRelayRxInfo;

  getRssi(): number;
  setRssi(value: number): UplinkRelayRxInfo;

  getWorChannel(): number;
  setWorChannel(value: number): UplinkRelayRxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkRelayRxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkRelayRxInfo): UplinkRelayRxInfo.AsObject;
  static serializeBinaryToWriter(message: UplinkRelayRxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkRelayRxInfo;
  static deserializeBinaryFromReader(message: UplinkRelayRxInfo, reader: jspb.BinaryReader): UplinkRelayRxInfo;
}

export namespace UplinkRelayRxInfo {
  export type AsObject = {
    devEui: string,
    frequency: number,
    dr: number,
    snr: number,
    rssi: number,
    worChannel: number,
  }
}

export class UplinkEvent extends jspb.Message {
  getDeduplicationId(): string;
  setDeduplicationId(value: string): UplinkEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): UplinkEvent;
  hasTime(): boolean;
  clearTime(): UplinkEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): UplinkEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): UplinkEvent;

  getDevAddr(): string;
  setDevAddr(value: string): UplinkEvent;

  getAdr(): boolean;
  setAdr(value: boolean): UplinkEvent;

  getDr(): number;
  setDr(value: number): UplinkEvent;

  getFCnt(): number;
  setFCnt(value: number): UplinkEvent;

  getFPort(): number;
  setFPort(value: number): UplinkEvent;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): UplinkEvent;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): UplinkEvent;

  getObject(): google_protobuf_struct_pb.Struct | undefined;
  setObject(value?: google_protobuf_struct_pb.Struct): UplinkEvent;
  hasObject(): boolean;
  clearObject(): UplinkEvent;

  getRxInfoList(): Array<gw_gw_pb.UplinkRxInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRxInfo>): UplinkEvent;
  clearRxInfoList(): UplinkEvent;
  addRxInfo(value?: gw_gw_pb.UplinkRxInfo, index?: number): gw_gw_pb.UplinkRxInfo;

  getTxInfo(): gw_gw_pb.UplinkTxInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTxInfo): UplinkEvent;
  hasTxInfo(): boolean;
  clearTxInfo(): UplinkEvent;

  getRelayRxInfo(): UplinkRelayRxInfo | undefined;
  setRelayRxInfo(value?: UplinkRelayRxInfo): UplinkEvent;
  hasRelayRxInfo(): boolean;
  clearRelayRxInfo(): UplinkEvent;

  getJoinServerContext(): common_common_pb.JoinServerContext | undefined;
  setJoinServerContext(value?: common_common_pb.JoinServerContext): UplinkEvent;
  hasJoinServerContext(): boolean;
  clearJoinServerContext(): UplinkEvent;

  getRegionConfigId(): string;
  setRegionConfigId(value: string): UplinkEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkEvent): UplinkEvent.AsObject;
  static serializeBinaryToWriter(message: UplinkEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkEvent;
  static deserializeBinaryFromReader(message: UplinkEvent, reader: jspb.BinaryReader): UplinkEvent;
}

export namespace UplinkEvent {
  export type AsObject = {
    deduplicationId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    devAddr: string,
    adr: boolean,
    dr: number,
    fCnt: number,
    fPort: number,
    confirmed: boolean,
    data: Uint8Array | string,
    object?: google_protobuf_struct_pb.Struct.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRxInfo.AsObject>,
    txInfo?: gw_gw_pb.UplinkTxInfo.AsObject,
    relayRxInfo?: UplinkRelayRxInfo.AsObject,
    joinServerContext?: common_common_pb.JoinServerContext.AsObject,
    regionConfigId: string,
  }
}

export class JoinEvent extends jspb.Message {
  getDeduplicationId(): string;
  setDeduplicationId(value: string): JoinEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): JoinEvent;
  hasTime(): boolean;
  clearTime(): JoinEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): JoinEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): JoinEvent;

  getDevAddr(): string;
  setDevAddr(value: string): JoinEvent;

  getRelayRxInfo(): UplinkRelayRxInfo | undefined;
  setRelayRxInfo(value?: UplinkRelayRxInfo): JoinEvent;
  hasRelayRxInfo(): boolean;
  clearRelayRxInfo(): JoinEvent;

  getJoinServerContext(): common_common_pb.JoinServerContext | undefined;
  setJoinServerContext(value?: common_common_pb.JoinServerContext): JoinEvent;
  hasJoinServerContext(): boolean;
  clearJoinServerContext(): JoinEvent;

  getRegionConfigId(): string;
  setRegionConfigId(value: string): JoinEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JoinEvent): JoinEvent.AsObject;
  static serializeBinaryToWriter(message: JoinEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinEvent;
  static deserializeBinaryFromReader(message: JoinEvent, reader: jspb.BinaryReader): JoinEvent;
}

export namespace JoinEvent {
  export type AsObject = {
    deduplicationId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    devAddr: string,
    relayRxInfo?: UplinkRelayRxInfo.AsObject,
    joinServerContext?: common_common_pb.JoinServerContext.AsObject,
    regionConfigId: string,
  }
}

export class AckEvent extends jspb.Message {
  getDeduplicationId(): string;
  setDeduplicationId(value: string): AckEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): AckEvent;
  hasTime(): boolean;
  clearTime(): AckEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): AckEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): AckEvent;

  getQueueItemId(): string;
  setQueueItemId(value: string): AckEvent;

  getAcknowledged(): boolean;
  setAcknowledged(value: boolean): AckEvent;

  getFCntDown(): number;
  setFCntDown(value: number): AckEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AckEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AckEvent): AckEvent.AsObject;
  static serializeBinaryToWriter(message: AckEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AckEvent;
  static deserializeBinaryFromReader(message: AckEvent, reader: jspb.BinaryReader): AckEvent;
}

export namespace AckEvent {
  export type AsObject = {
    deduplicationId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    queueItemId: string,
    acknowledged: boolean,
    fCntDown: number,
  }
}

export class TxAckEvent extends jspb.Message {
  getDownlinkId(): number;
  setDownlinkId(value: number): TxAckEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): TxAckEvent;
  hasTime(): boolean;
  clearTime(): TxAckEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): TxAckEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): TxAckEvent;

  getQueueItemId(): string;
  setQueueItemId(value: string): TxAckEvent;

  getFCntDown(): number;
  setFCntDown(value: number): TxAckEvent;

  getGatewayId(): string;
  setGatewayId(value: string): TxAckEvent;

  getTxInfo(): gw_gw_pb.DownlinkTxInfo | undefined;
  setTxInfo(value?: gw_gw_pb.DownlinkTxInfo): TxAckEvent;
  hasTxInfo(): boolean;
  clearTxInfo(): TxAckEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxAckEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TxAckEvent): TxAckEvent.AsObject;
  static serializeBinaryToWriter(message: TxAckEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxAckEvent;
  static deserializeBinaryFromReader(message: TxAckEvent, reader: jspb.BinaryReader): TxAckEvent;
}

export namespace TxAckEvent {
  export type AsObject = {
    downlinkId: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    queueItemId: string,
    fCntDown: number,
    gatewayId: string,
    txInfo?: gw_gw_pb.DownlinkTxInfo.AsObject,
  }
}

export class LogEvent extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): LogEvent;
  hasTime(): boolean;
  clearTime(): LogEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): LogEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): LogEvent;

  getLevel(): LogLevel;
  setLevel(value: LogLevel): LogEvent;

  getCode(): LogCode;
  setCode(value: LogCode): LogEvent;

  getDescription(): string;
  setDescription(value: string): LogEvent;

  getContextMap(): jspb.Map<string, string>;
  clearContextMap(): LogEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LogEvent): LogEvent.AsObject;
  static serializeBinaryToWriter(message: LogEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEvent;
  static deserializeBinaryFromReader(message: LogEvent, reader: jspb.BinaryReader): LogEvent;
}

export namespace LogEvent {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    level: LogLevel,
    code: LogCode,
    description: string,
    contextMap: Array<[string, string]>,
  }
}

export class StatusEvent extends jspb.Message {
  getDeduplicationId(): string;
  setDeduplicationId(value: string): StatusEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): StatusEvent;
  hasTime(): boolean;
  clearTime(): StatusEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): StatusEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): StatusEvent;

  getMargin(): number;
  setMargin(value: number): StatusEvent;

  getExternalPowerSource(): boolean;
  setExternalPowerSource(value: boolean): StatusEvent;

  getBatteryLevelUnavailable(): boolean;
  setBatteryLevelUnavailable(value: boolean): StatusEvent;

  getBatteryLevel(): number;
  setBatteryLevel(value: number): StatusEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusEvent.AsObject;
  static toObject(includeInstance: boolean, msg: StatusEvent): StatusEvent.AsObject;
  static serializeBinaryToWriter(message: StatusEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusEvent;
  static deserializeBinaryFromReader(message: StatusEvent, reader: jspb.BinaryReader): StatusEvent;
}

export namespace StatusEvent {
  export type AsObject = {
    deduplicationId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    margin: number,
    externalPowerSource: boolean,
    batteryLevelUnavailable: boolean,
    batteryLevel: number,
  }
}

export class LocationEvent extends jspb.Message {
  getDeduplicationId(): string;
  setDeduplicationId(value: string): LocationEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): LocationEvent;
  hasTime(): boolean;
  clearTime(): LocationEvent;

  getDeviceInfo(): DeviceInfo | undefined;
  setDeviceInfo(value?: DeviceInfo): LocationEvent;
  hasDeviceInfo(): boolean;
  clearDeviceInfo(): LocationEvent;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): LocationEvent;
  hasLocation(): boolean;
  clearLocation(): LocationEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LocationEvent): LocationEvent.AsObject;
  static serializeBinaryToWriter(message: LocationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationEvent;
  static deserializeBinaryFromReader(message: LocationEvent, reader: jspb.BinaryReader): LocationEvent;
}

export namespace LocationEvent {
  export type AsObject = {
    deduplicationId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceInfo?: DeviceInfo.AsObject,
    location?: common_common_pb.Location.AsObject,
  }
}

export class DownlinkCommand extends jspb.Message {
  getId(): string;
  setId(value: string): DownlinkCommand;

  getDevEui(): string;
  setDevEui(value: string): DownlinkCommand;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): DownlinkCommand;

  getFPort(): number;
  setFPort(value: number): DownlinkCommand;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): DownlinkCommand;

  getObject(): google_protobuf_struct_pb.Struct | undefined;
  setObject(value?: google_protobuf_struct_pb.Struct): DownlinkCommand;
  hasObject(): boolean;
  clearObject(): DownlinkCommand;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): DownlinkCommand;
  hasExpiresAt(): boolean;
  clearExpiresAt(): DownlinkCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkCommand.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkCommand): DownlinkCommand.AsObject;
  static serializeBinaryToWriter(message: DownlinkCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkCommand;
  static deserializeBinaryFromReader(message: DownlinkCommand, reader: jspb.BinaryReader): DownlinkCommand;
}

export namespace DownlinkCommand {
  export type AsObject = {
    id: string,
    devEui: string,
    confirmed: boolean,
    fPort: number,
    data: Uint8Array | string,
    object?: google_protobuf_struct_pb.Struct.AsObject,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum LogLevel { 
  INFO = 0,
  WARNING = 1,
  ERROR = 2,
}
export enum LogCode { 
  UNKNOWN = 0,
  DOWNLINK_PAYLOAD_SIZE = 1,
  UPLINK_CODEC = 2,
  DOWNLINK_CODEC = 3,
  OTAA = 4,
  UPLINK_F_CNT_RESET = 5,
  UPLINK_MIC = 6,
  UPLINK_F_CNT_RETRANSMISSION = 7,
  DOWNLINK_GATEWAY = 8,
  RELAY_NEW_END_DEVICE = 9,
  F_CNT_DOWN = 10,
  EXPIRED = 11,
}

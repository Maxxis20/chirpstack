import * as jspb from 'google-protobuf'

import * as common_common_pb from '../common/common_pb'; // proto import: "common/common.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class Event extends jspb.Message {
  getUplinkFrame(): UplinkFrame | undefined;
  setUplinkFrame(value?: UplinkFrame): Event;
  hasUplinkFrame(): boolean;
  clearUplinkFrame(): Event;

  getGatewayStats(): GatewayStats | undefined;
  setGatewayStats(value?: GatewayStats): Event;
  hasGatewayStats(): boolean;
  clearGatewayStats(): Event;

  getMesh(): MeshEvent | undefined;
  setMesh(value?: MeshEvent): Event;
  hasMesh(): boolean;
  clearMesh(): Event;

  getEventCase(): Event.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    uplinkFrame?: UplinkFrame.AsObject,
    gatewayStats?: GatewayStats.AsObject,
    mesh?: MeshEvent.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    UPLINK_FRAME = 1,
    GATEWAY_STATS = 2,
    MESH = 3,
  }
}

export class Command extends jspb.Message {
  getSendDownlinkFrame(): DownlinkFrame | undefined;
  setSendDownlinkFrame(value?: DownlinkFrame): Command;
  hasSendDownlinkFrame(): boolean;
  clearSendDownlinkFrame(): Command;

  getSetGatewayConfiguration(): GatewayConfiguration | undefined;
  setSetGatewayConfiguration(value?: GatewayConfiguration): Command;
  hasSetGatewayConfiguration(): boolean;
  clearSetGatewayConfiguration(): Command;

  getGetGatewayId(): GetGatewayIdRequest | undefined;
  setGetGatewayId(value?: GetGatewayIdRequest): Command;
  hasGetGatewayId(): boolean;
  clearGetGatewayId(): Command;

  getGetLocation(): GetLocationRequest | undefined;
  setGetLocation(value?: GetLocationRequest): Command;
  hasGetLocation(): boolean;
  clearGetLocation(): Command;

  getMesh(): MeshCommand | undefined;
  setMesh(value?: MeshCommand): Command;
  hasMesh(): boolean;
  clearMesh(): Command;

  getCommandCase(): Command.CommandCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    sendDownlinkFrame?: DownlinkFrame.AsObject,
    setGatewayConfiguration?: GatewayConfiguration.AsObject,
    getGatewayId?: GetGatewayIdRequest.AsObject,
    getLocation?: GetLocationRequest.AsObject,
    mesh?: MeshCommand.AsObject,
  }

  export enum CommandCase { 
    COMMAND_NOT_SET = 0,
    SEND_DOWNLINK_FRAME = 1,
    SET_GATEWAY_CONFIGURATION = 2,
    GET_GATEWAY_ID = 3,
    GET_LOCATION = 4,
    MESH = 5,
  }
}

export class MeshEvent extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): MeshEvent;

  getRelayId(): string;
  setRelayId(value: string): MeshEvent;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): MeshEvent;
  hasTime(): boolean;
  clearTime(): MeshEvent;

  getEventsList(): Array<MeshEventItem>;
  setEventsList(value: Array<MeshEventItem>): MeshEvent;
  clearEventsList(): MeshEvent;
  addEvents(value?: MeshEventItem, index?: number): MeshEventItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MeshEvent): MeshEvent.AsObject;
  static serializeBinaryToWriter(message: MeshEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshEvent;
  static deserializeBinaryFromReader(message: MeshEvent, reader: jspb.BinaryReader): MeshEvent;
}

export namespace MeshEvent {
  export type AsObject = {
    gatewayId: string,
    relayId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventsList: Array<MeshEventItem.AsObject>,
  }
}

export class MeshEventItem extends jspb.Message {
  getProprietary(): MeshEventProprietary | undefined;
  setProprietary(value?: MeshEventProprietary): MeshEventItem;
  hasProprietary(): boolean;
  clearProprietary(): MeshEventItem;

  getHeartbeat(): MeshEventHeartbeat | undefined;
  setHeartbeat(value?: MeshEventHeartbeat): MeshEventItem;
  hasHeartbeat(): boolean;
  clearHeartbeat(): MeshEventItem;

  getEventCase(): MeshEventItem.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshEventItem.AsObject;
  static toObject(includeInstance: boolean, msg: MeshEventItem): MeshEventItem.AsObject;
  static serializeBinaryToWriter(message: MeshEventItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshEventItem;
  static deserializeBinaryFromReader(message: MeshEventItem, reader: jspb.BinaryReader): MeshEventItem;
}

export namespace MeshEventItem {
  export type AsObject = {
    proprietary?: MeshEventProprietary.AsObject,
    heartbeat?: MeshEventHeartbeat.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    PROPRIETARY = 1,
    HEARTBEAT = 2,
  }
}

export class MeshCommand extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): MeshCommand;

  getRelayId(): string;
  setRelayId(value: string): MeshCommand;

  getCommandsList(): Array<MeshCommandItem>;
  setCommandsList(value: Array<MeshCommandItem>): MeshCommand;
  clearCommandsList(): MeshCommand;
  addCommands(value?: MeshCommandItem, index?: number): MeshCommandItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshCommand.AsObject;
  static toObject(includeInstance: boolean, msg: MeshCommand): MeshCommand.AsObject;
  static serializeBinaryToWriter(message: MeshCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshCommand;
  static deserializeBinaryFromReader(message: MeshCommand, reader: jspb.BinaryReader): MeshCommand;
}

export namespace MeshCommand {
  export type AsObject = {
    gatewayId: string,
    relayId: string,
    commandsList: Array<MeshCommandItem.AsObject>,
  }
}

export class MeshCommandItem extends jspb.Message {
  getProprietary(): MeshCommandProprietary | undefined;
  setProprietary(value?: MeshCommandProprietary): MeshCommandItem;
  hasProprietary(): boolean;
  clearProprietary(): MeshCommandItem;

  getCommandCase(): MeshCommandItem.CommandCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshCommandItem.AsObject;
  static toObject(includeInstance: boolean, msg: MeshCommandItem): MeshCommandItem.AsObject;
  static serializeBinaryToWriter(message: MeshCommandItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshCommandItem;
  static deserializeBinaryFromReader(message: MeshCommandItem, reader: jspb.BinaryReader): MeshCommandItem;
}

export namespace MeshCommandItem {
  export type AsObject = {
    proprietary?: MeshCommandProprietary.AsObject,
  }

  export enum CommandCase { 
    COMMAND_NOT_SET = 0,
    PROPRIETARY = 1,
  }
}

export class Modulation extends jspb.Message {
  getLora(): LoraModulationInfo | undefined;
  setLora(value?: LoraModulationInfo): Modulation;
  hasLora(): boolean;
  clearLora(): Modulation;

  getFsk(): FskModulationInfo | undefined;
  setFsk(value?: FskModulationInfo): Modulation;
  hasFsk(): boolean;
  clearFsk(): Modulation;

  getLrFhss(): LrFhssModulationInfo | undefined;
  setLrFhss(value?: LrFhssModulationInfo): Modulation;
  hasLrFhss(): boolean;
  clearLrFhss(): Modulation;

  getParametersCase(): Modulation.ParametersCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Modulation.AsObject;
  static toObject(includeInstance: boolean, msg: Modulation): Modulation.AsObject;
  static serializeBinaryToWriter(message: Modulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Modulation;
  static deserializeBinaryFromReader(message: Modulation, reader: jspb.BinaryReader): Modulation;
}

export namespace Modulation {
  export type AsObject = {
    lora?: LoraModulationInfo.AsObject,
    fsk?: FskModulationInfo.AsObject,
    lrFhss?: LrFhssModulationInfo.AsObject,
  }

  export enum ParametersCase { 
    PARAMETERS_NOT_SET = 0,
    LORA = 3,
    FSK = 4,
    LR_FHSS = 5,
  }
}

export class UplinkTxInfoLegacy extends jspb.Message {
  getFrequency(): number;
  setFrequency(value: number): UplinkTxInfoLegacy;

  getModulation(): common_common_pb.Modulation;
  setModulation(value: common_common_pb.Modulation): UplinkTxInfoLegacy;

  getLoraModulationInfo(): LoraModulationInfo | undefined;
  setLoraModulationInfo(value?: LoraModulationInfo): UplinkTxInfoLegacy;
  hasLoraModulationInfo(): boolean;
  clearLoraModulationInfo(): UplinkTxInfoLegacy;

  getFskModulationInfo(): FskModulationInfo | undefined;
  setFskModulationInfo(value?: FskModulationInfo): UplinkTxInfoLegacy;
  hasFskModulationInfo(): boolean;
  clearFskModulationInfo(): UplinkTxInfoLegacy;

  getLrFhssModulationInfo(): LrFhssModulationInfo | undefined;
  setLrFhssModulationInfo(value?: LrFhssModulationInfo): UplinkTxInfoLegacy;
  hasLrFhssModulationInfo(): boolean;
  clearLrFhssModulationInfo(): UplinkTxInfoLegacy;

  getModulationInfoCase(): UplinkTxInfoLegacy.ModulationInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkTxInfoLegacy.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkTxInfoLegacy): UplinkTxInfoLegacy.AsObject;
  static serializeBinaryToWriter(message: UplinkTxInfoLegacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkTxInfoLegacy;
  static deserializeBinaryFromReader(message: UplinkTxInfoLegacy, reader: jspb.BinaryReader): UplinkTxInfoLegacy;
}

export namespace UplinkTxInfoLegacy {
  export type AsObject = {
    frequency: number,
    modulation: common_common_pb.Modulation,
    loraModulationInfo?: LoraModulationInfo.AsObject,
    fskModulationInfo?: FskModulationInfo.AsObject,
    lrFhssModulationInfo?: LrFhssModulationInfo.AsObject,
  }

  export enum ModulationInfoCase { 
    MODULATION_INFO_NOT_SET = 0,
    LORA_MODULATION_INFO = 3,
    FSK_MODULATION_INFO = 4,
    LR_FHSS_MODULATION_INFO = 5,
  }
}

export class UplinkTxInfo extends jspb.Message {
  getFrequency(): number;
  setFrequency(value: number): UplinkTxInfo;

  getModulation(): Modulation | undefined;
  setModulation(value?: Modulation): UplinkTxInfo;
  hasModulation(): boolean;
  clearModulation(): UplinkTxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkTxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkTxInfo): UplinkTxInfo.AsObject;
  static serializeBinaryToWriter(message: UplinkTxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkTxInfo;
  static deserializeBinaryFromReader(message: UplinkTxInfo, reader: jspb.BinaryReader): UplinkTxInfo;
}

export namespace UplinkTxInfo {
  export type AsObject = {
    frequency: number,
    modulation?: Modulation.AsObject,
  }
}

export class LoraModulationInfo extends jspb.Message {
  getBandwidth(): number;
  setBandwidth(value: number): LoraModulationInfo;

  getSpreadingFactor(): number;
  setSpreadingFactor(value: number): LoraModulationInfo;

  getCodeRateLegacy(): string;
  setCodeRateLegacy(value: string): LoraModulationInfo;

  getCodeRate(): CodeRate;
  setCodeRate(value: CodeRate): LoraModulationInfo;

  getPolarizationInversion(): boolean;
  setPolarizationInversion(value: boolean): LoraModulationInfo;

  getPreamble(): number;
  setPreamble(value: number): LoraModulationInfo;

  getNoCrc(): boolean;
  setNoCrc(value: boolean): LoraModulationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoraModulationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LoraModulationInfo): LoraModulationInfo.AsObject;
  static serializeBinaryToWriter(message: LoraModulationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoraModulationInfo;
  static deserializeBinaryFromReader(message: LoraModulationInfo, reader: jspb.BinaryReader): LoraModulationInfo;
}

export namespace LoraModulationInfo {
  export type AsObject = {
    bandwidth: number,
    spreadingFactor: number,
    codeRateLegacy: string,
    codeRate: CodeRate,
    polarizationInversion: boolean,
    preamble: number,
    noCrc: boolean,
  }
}

export class FskModulationInfo extends jspb.Message {
  getFrequencyDeviation(): number;
  setFrequencyDeviation(value: number): FskModulationInfo;

  getDatarate(): number;
  setDatarate(value: number): FskModulationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FskModulationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FskModulationInfo): FskModulationInfo.AsObject;
  static serializeBinaryToWriter(message: FskModulationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FskModulationInfo;
  static deserializeBinaryFromReader(message: FskModulationInfo, reader: jspb.BinaryReader): FskModulationInfo;
}

export namespace FskModulationInfo {
  export type AsObject = {
    frequencyDeviation: number,
    datarate: number,
  }
}

export class LrFhssModulationInfo extends jspb.Message {
  getOperatingChannelWidth(): number;
  setOperatingChannelWidth(value: number): LrFhssModulationInfo;

  getCodeRateLegacy(): string;
  setCodeRateLegacy(value: string): LrFhssModulationInfo;

  getCodeRate(): CodeRate;
  setCodeRate(value: CodeRate): LrFhssModulationInfo;

  getGridSteps(): number;
  setGridSteps(value: number): LrFhssModulationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LrFhssModulationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LrFhssModulationInfo): LrFhssModulationInfo.AsObject;
  static serializeBinaryToWriter(message: LrFhssModulationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LrFhssModulationInfo;
  static deserializeBinaryFromReader(message: LrFhssModulationInfo, reader: jspb.BinaryReader): LrFhssModulationInfo;
}

export namespace LrFhssModulationInfo {
  export type AsObject = {
    operatingChannelWidth: number,
    codeRateLegacy: string,
    codeRate: CodeRate,
    gridSteps: number,
  }
}

export class EncryptedFineTimestamp extends jspb.Message {
  getAesKeyIndex(): number;
  setAesKeyIndex(value: number): EncryptedFineTimestamp;

  getEncryptedNs(): Uint8Array | string;
  getEncryptedNs_asU8(): Uint8Array;
  getEncryptedNs_asB64(): string;
  setEncryptedNs(value: Uint8Array | string): EncryptedFineTimestamp;

  getFpgaId(): Uint8Array | string;
  getFpgaId_asU8(): Uint8Array;
  getFpgaId_asB64(): string;
  setFpgaId(value: Uint8Array | string): EncryptedFineTimestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedFineTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedFineTimestamp): EncryptedFineTimestamp.AsObject;
  static serializeBinaryToWriter(message: EncryptedFineTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedFineTimestamp;
  static deserializeBinaryFromReader(message: EncryptedFineTimestamp, reader: jspb.BinaryReader): EncryptedFineTimestamp;
}

export namespace EncryptedFineTimestamp {
  export type AsObject = {
    aesKeyIndex: number,
    encryptedNs: Uint8Array | string,
    fpgaId: Uint8Array | string,
  }
}

export class PlainFineTimestamp extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): PlainFineTimestamp;
  hasTime(): boolean;
  clearTime(): PlainFineTimestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlainFineTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: PlainFineTimestamp): PlainFineTimestamp.AsObject;
  static serializeBinaryToWriter(message: PlainFineTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlainFineTimestamp;
  static deserializeBinaryFromReader(message: PlainFineTimestamp, reader: jspb.BinaryReader): PlainFineTimestamp;
}

export namespace PlainFineTimestamp {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GatewayStats extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): GatewayStats;

  getGatewayId(): string;
  setGatewayId(value: string): GatewayStats;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): GatewayStats;
  hasTime(): boolean;
  clearTime(): GatewayStats;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): GatewayStats;
  hasLocation(): boolean;
  clearLocation(): GatewayStats;

  getConfigVersion(): string;
  setConfigVersion(value: string): GatewayStats;

  getRxPacketsReceived(): number;
  setRxPacketsReceived(value: number): GatewayStats;

  getRxPacketsReceivedOk(): number;
  setRxPacketsReceivedOk(value: number): GatewayStats;

  getTxPacketsReceived(): number;
  setTxPacketsReceived(value: number): GatewayStats;

  getTxPacketsEmitted(): number;
  setTxPacketsEmitted(value: number): GatewayStats;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): GatewayStats;

  getTxPacketsPerFrequencyMap(): jspb.Map<number, number>;
  clearTxPacketsPerFrequencyMap(): GatewayStats;

  getRxPacketsPerFrequencyMap(): jspb.Map<number, number>;
  clearRxPacketsPerFrequencyMap(): GatewayStats;

  getTxPacketsPerModulationList(): Array<PerModulationCount>;
  setTxPacketsPerModulationList(value: Array<PerModulationCount>): GatewayStats;
  clearTxPacketsPerModulationList(): GatewayStats;
  addTxPacketsPerModulation(value?: PerModulationCount, index?: number): PerModulationCount;

  getRxPacketsPerModulationList(): Array<PerModulationCount>;
  setRxPacketsPerModulationList(value: Array<PerModulationCount>): GatewayStats;
  clearRxPacketsPerModulationList(): GatewayStats;
  addRxPacketsPerModulation(value?: PerModulationCount, index?: number): PerModulationCount;

  getTxPacketsPerStatusMap(): jspb.Map<string, number>;
  clearTxPacketsPerStatusMap(): GatewayStats;

  getDutyCycleStats(): DutyCycleStats | undefined;
  setDutyCycleStats(value?: DutyCycleStats): GatewayStats;
  hasDutyCycleStats(): boolean;
  clearDutyCycleStats(): GatewayStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayStats.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayStats): GatewayStats.AsObject;
  static serializeBinaryToWriter(message: GatewayStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayStats;
  static deserializeBinaryFromReader(message: GatewayStats, reader: jspb.BinaryReader): GatewayStats;
}

export namespace GatewayStats {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    location?: common_common_pb.Location.AsObject,
    configVersion: string,
    rxPacketsReceived: number,
    rxPacketsReceivedOk: number,
    txPacketsReceived: number,
    txPacketsEmitted: number,
    metadataMap: Array<[string, string]>,
    txPacketsPerFrequencyMap: Array<[number, number]>,
    rxPacketsPerFrequencyMap: Array<[number, number]>,
    txPacketsPerModulationList: Array<PerModulationCount.AsObject>,
    rxPacketsPerModulationList: Array<PerModulationCount.AsObject>,
    txPacketsPerStatusMap: Array<[string, number]>,
    dutyCycleStats?: DutyCycleStats.AsObject,
  }
}

export class PerModulationCount extends jspb.Message {
  getModulation(): Modulation | undefined;
  setModulation(value?: Modulation): PerModulationCount;
  hasModulation(): boolean;
  clearModulation(): PerModulationCount;

  getCount(): number;
  setCount(value: number): PerModulationCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerModulationCount.AsObject;
  static toObject(includeInstance: boolean, msg: PerModulationCount): PerModulationCount.AsObject;
  static serializeBinaryToWriter(message: PerModulationCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerModulationCount;
  static deserializeBinaryFromReader(message: PerModulationCount, reader: jspb.BinaryReader): PerModulationCount;
}

export namespace PerModulationCount {
  export type AsObject = {
    modulation?: Modulation.AsObject,
    count: number,
  }
}

export class DutyCycleStats extends jspb.Message {
  getRegulation(): common_common_pb.Regulation;
  setRegulation(value: common_common_pb.Regulation): DutyCycleStats;

  getWindow(): google_protobuf_duration_pb.Duration | undefined;
  setWindow(value?: google_protobuf_duration_pb.Duration): DutyCycleStats;
  hasWindow(): boolean;
  clearWindow(): DutyCycleStats;

  getBandsList(): Array<DutyCycleBand>;
  setBandsList(value: Array<DutyCycleBand>): DutyCycleStats;
  clearBandsList(): DutyCycleStats;
  addBands(value?: DutyCycleBand, index?: number): DutyCycleBand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DutyCycleStats.AsObject;
  static toObject(includeInstance: boolean, msg: DutyCycleStats): DutyCycleStats.AsObject;
  static serializeBinaryToWriter(message: DutyCycleStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DutyCycleStats;
  static deserializeBinaryFromReader(message: DutyCycleStats, reader: jspb.BinaryReader): DutyCycleStats;
}

export namespace DutyCycleStats {
  export type AsObject = {
    regulation: common_common_pb.Regulation,
    window?: google_protobuf_duration_pb.Duration.AsObject,
    bandsList: Array<DutyCycleBand.AsObject>,
  }
}

export class DutyCycleBand extends jspb.Message {
  getName(): string;
  setName(value: string): DutyCycleBand;

  getFrequencyMin(): number;
  setFrequencyMin(value: number): DutyCycleBand;

  getFrequencyMax(): number;
  setFrequencyMax(value: number): DutyCycleBand;

  getLoadMax(): google_protobuf_duration_pb.Duration | undefined;
  setLoadMax(value?: google_protobuf_duration_pb.Duration): DutyCycleBand;
  hasLoadMax(): boolean;
  clearLoadMax(): DutyCycleBand;

  getLoadTracked(): google_protobuf_duration_pb.Duration | undefined;
  setLoadTracked(value?: google_protobuf_duration_pb.Duration): DutyCycleBand;
  hasLoadTracked(): boolean;
  clearLoadTracked(): DutyCycleBand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DutyCycleBand.AsObject;
  static toObject(includeInstance: boolean, msg: DutyCycleBand): DutyCycleBand.AsObject;
  static serializeBinaryToWriter(message: DutyCycleBand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DutyCycleBand;
  static deserializeBinaryFromReader(message: DutyCycleBand, reader: jspb.BinaryReader): DutyCycleBand;
}

export namespace DutyCycleBand {
  export type AsObject = {
    name: string,
    frequencyMin: number,
    frequencyMax: number,
    loadMax?: google_protobuf_duration_pb.Duration.AsObject,
    loadTracked?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class UplinkRxInfoLegacy extends jspb.Message {
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): UplinkRxInfoLegacy;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): UplinkRxInfoLegacy;
  hasTime(): boolean;
  clearTime(): UplinkRxInfoLegacy;

  getTimeSinceGpsEpoch(): google_protobuf_duration_pb.Duration | undefined;
  setTimeSinceGpsEpoch(value?: google_protobuf_duration_pb.Duration): UplinkRxInfoLegacy;
  hasTimeSinceGpsEpoch(): boolean;
  clearTimeSinceGpsEpoch(): UplinkRxInfoLegacy;

  getRssi(): number;
  setRssi(value: number): UplinkRxInfoLegacy;

  getLoraSnr(): number;
  setLoraSnr(value: number): UplinkRxInfoLegacy;

  getChannel(): number;
  setChannel(value: number): UplinkRxInfoLegacy;

  getRfChain(): number;
  setRfChain(value: number): UplinkRxInfoLegacy;

  getBoard(): number;
  setBoard(value: number): UplinkRxInfoLegacy;

  getAntenna(): number;
  setAntenna(value: number): UplinkRxInfoLegacy;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): UplinkRxInfoLegacy;
  hasLocation(): boolean;
  clearLocation(): UplinkRxInfoLegacy;

  getFineTimestampType(): FineTimestampType;
  setFineTimestampType(value: FineTimestampType): UplinkRxInfoLegacy;

  getEncryptedFineTimestamp(): EncryptedFineTimestamp | undefined;
  setEncryptedFineTimestamp(value?: EncryptedFineTimestamp): UplinkRxInfoLegacy;
  hasEncryptedFineTimestamp(): boolean;
  clearEncryptedFineTimestamp(): UplinkRxInfoLegacy;

  getPlainFineTimestamp(): PlainFineTimestamp | undefined;
  setPlainFineTimestamp(value?: PlainFineTimestamp): UplinkRxInfoLegacy;
  hasPlainFineTimestamp(): boolean;
  clearPlainFineTimestamp(): UplinkRxInfoLegacy;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): UplinkRxInfoLegacy;

  getUplinkId(): Uint8Array | string;
  getUplinkId_asU8(): Uint8Array;
  getUplinkId_asB64(): string;
  setUplinkId(value: Uint8Array | string): UplinkRxInfoLegacy;

  getCrcStatus(): CRCStatus;
  setCrcStatus(value: CRCStatus): UplinkRxInfoLegacy;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UplinkRxInfoLegacy;

  getFineTimestampCase(): UplinkRxInfoLegacy.FineTimestampCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkRxInfoLegacy.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkRxInfoLegacy): UplinkRxInfoLegacy.AsObject;
  static serializeBinaryToWriter(message: UplinkRxInfoLegacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkRxInfoLegacy;
  static deserializeBinaryFromReader(message: UplinkRxInfoLegacy, reader: jspb.BinaryReader): UplinkRxInfoLegacy;
}

export namespace UplinkRxInfoLegacy {
  export type AsObject = {
    gatewayId: Uint8Array | string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeSinceGpsEpoch?: google_protobuf_duration_pb.Duration.AsObject,
    rssi: number,
    loraSnr: number,
    channel: number,
    rfChain: number,
    board: number,
    antenna: number,
    location?: common_common_pb.Location.AsObject,
    fineTimestampType: FineTimestampType,
    encryptedFineTimestamp?: EncryptedFineTimestamp.AsObject,
    plainFineTimestamp?: PlainFineTimestamp.AsObject,
    context: Uint8Array | string,
    uplinkId: Uint8Array | string,
    crcStatus: CRCStatus,
    metadataMap: Array<[string, string]>,
  }

  export enum FineTimestampCase { 
    FINE_TIMESTAMP_NOT_SET = 0,
    ENCRYPTED_FINE_TIMESTAMP = 13,
    PLAIN_FINE_TIMESTAMP = 14,
  }
}

export class UplinkRxInfo extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): UplinkRxInfo;

  getUplinkId(): number;
  setUplinkId(value: number): UplinkRxInfo;

  getGwTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGwTime(value?: google_protobuf_timestamp_pb.Timestamp): UplinkRxInfo;
  hasGwTime(): boolean;
  clearGwTime(): UplinkRxInfo;

  getNsTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNsTime(value?: google_protobuf_timestamp_pb.Timestamp): UplinkRxInfo;
  hasNsTime(): boolean;
  clearNsTime(): UplinkRxInfo;

  getTimeSinceGpsEpoch(): google_protobuf_duration_pb.Duration | undefined;
  setTimeSinceGpsEpoch(value?: google_protobuf_duration_pb.Duration): UplinkRxInfo;
  hasTimeSinceGpsEpoch(): boolean;
  clearTimeSinceGpsEpoch(): UplinkRxInfo;

  getFineTimeSinceGpsEpoch(): google_protobuf_duration_pb.Duration | undefined;
  setFineTimeSinceGpsEpoch(value?: google_protobuf_duration_pb.Duration): UplinkRxInfo;
  hasFineTimeSinceGpsEpoch(): boolean;
  clearFineTimeSinceGpsEpoch(): UplinkRxInfo;

  getRssi(): number;
  setRssi(value: number): UplinkRxInfo;

  getSnr(): number;
  setSnr(value: number): UplinkRxInfo;

  getChannel(): number;
  setChannel(value: number): UplinkRxInfo;

  getRfChain(): number;
  setRfChain(value: number): UplinkRxInfo;

  getBoard(): number;
  setBoard(value: number): UplinkRxInfo;

  getAntenna(): number;
  setAntenna(value: number): UplinkRxInfo;

  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): UplinkRxInfo;
  hasLocation(): boolean;
  clearLocation(): UplinkRxInfo;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): UplinkRxInfo;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UplinkRxInfo;

  getCrcStatus(): CRCStatus;
  setCrcStatus(value: CRCStatus): UplinkRxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkRxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkRxInfo): UplinkRxInfo.AsObject;
  static serializeBinaryToWriter(message: UplinkRxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkRxInfo;
  static deserializeBinaryFromReader(message: UplinkRxInfo, reader: jspb.BinaryReader): UplinkRxInfo;
}

export namespace UplinkRxInfo {
  export type AsObject = {
    gatewayId: string,
    uplinkId: number,
    gwTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nsTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeSinceGpsEpoch?: google_protobuf_duration_pb.Duration.AsObject,
    fineTimeSinceGpsEpoch?: google_protobuf_duration_pb.Duration.AsObject,
    rssi: number,
    snr: number,
    channel: number,
    rfChain: number,
    board: number,
    antenna: number,
    location?: common_common_pb.Location.AsObject,
    context: Uint8Array | string,
    metadataMap: Array<[string, string]>,
    crcStatus: CRCStatus,
  }
}

export class DownlinkTxInfoLegacy extends jspb.Message {
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): DownlinkTxInfoLegacy;

  getFrequency(): number;
  setFrequency(value: number): DownlinkTxInfoLegacy;

  getPower(): number;
  setPower(value: number): DownlinkTxInfoLegacy;

  getModulation(): common_common_pb.Modulation;
  setModulation(value: common_common_pb.Modulation): DownlinkTxInfoLegacy;

  getLoraModulationInfo(): LoraModulationInfo | undefined;
  setLoraModulationInfo(value?: LoraModulationInfo): DownlinkTxInfoLegacy;
  hasLoraModulationInfo(): boolean;
  clearLoraModulationInfo(): DownlinkTxInfoLegacy;

  getFskModulationInfo(): FskModulationInfo | undefined;
  setFskModulationInfo(value?: FskModulationInfo): DownlinkTxInfoLegacy;
  hasFskModulationInfo(): boolean;
  clearFskModulationInfo(): DownlinkTxInfoLegacy;

  getBoard(): number;
  setBoard(value: number): DownlinkTxInfoLegacy;

  getAntenna(): number;
  setAntenna(value: number): DownlinkTxInfoLegacy;

  getTiming(): DownlinkTiming;
  setTiming(value: DownlinkTiming): DownlinkTxInfoLegacy;

  getImmediatelyTimingInfo(): ImmediatelyTimingInfo | undefined;
  setImmediatelyTimingInfo(value?: ImmediatelyTimingInfo): DownlinkTxInfoLegacy;
  hasImmediatelyTimingInfo(): boolean;
  clearImmediatelyTimingInfo(): DownlinkTxInfoLegacy;

  getDelayTimingInfo(): DelayTimingInfo | undefined;
  setDelayTimingInfo(value?: DelayTimingInfo): DownlinkTxInfoLegacy;
  hasDelayTimingInfo(): boolean;
  clearDelayTimingInfo(): DownlinkTxInfoLegacy;

  getGpsEpochTimingInfo(): GPSEpochTimingInfo | undefined;
  setGpsEpochTimingInfo(value?: GPSEpochTimingInfo): DownlinkTxInfoLegacy;
  hasGpsEpochTimingInfo(): boolean;
  clearGpsEpochTimingInfo(): DownlinkTxInfoLegacy;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): DownlinkTxInfoLegacy;

  getModulationInfoCase(): DownlinkTxInfoLegacy.ModulationInfoCase;

  getTimingInfoCase(): DownlinkTxInfoLegacy.TimingInfoCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkTxInfoLegacy.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkTxInfoLegacy): DownlinkTxInfoLegacy.AsObject;
  static serializeBinaryToWriter(message: DownlinkTxInfoLegacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkTxInfoLegacy;
  static deserializeBinaryFromReader(message: DownlinkTxInfoLegacy, reader: jspb.BinaryReader): DownlinkTxInfoLegacy;
}

export namespace DownlinkTxInfoLegacy {
  export type AsObject = {
    gatewayId: Uint8Array | string,
    frequency: number,
    power: number,
    modulation: common_common_pb.Modulation,
    loraModulationInfo?: LoraModulationInfo.AsObject,
    fskModulationInfo?: FskModulationInfo.AsObject,
    board: number,
    antenna: number,
    timing: DownlinkTiming,
    immediatelyTimingInfo?: ImmediatelyTimingInfo.AsObject,
    delayTimingInfo?: DelayTimingInfo.AsObject,
    gpsEpochTimingInfo?: GPSEpochTimingInfo.AsObject,
    context: Uint8Array | string,
  }

  export enum ModulationInfoCase { 
    MODULATION_INFO_NOT_SET = 0,
    LORA_MODULATION_INFO = 8,
    FSK_MODULATION_INFO = 9,
  }

  export enum TimingInfoCase { 
    TIMING_INFO_NOT_SET = 0,
    IMMEDIATELY_TIMING_INFO = 13,
    DELAY_TIMING_INFO = 14,
    GPS_EPOCH_TIMING_INFO = 15,
  }
}

export class DownlinkTxInfo extends jspb.Message {
  getFrequency(): number;
  setFrequency(value: number): DownlinkTxInfo;

  getPower(): number;
  setPower(value: number): DownlinkTxInfo;

  getModulation(): Modulation | undefined;
  setModulation(value?: Modulation): DownlinkTxInfo;
  hasModulation(): boolean;
  clearModulation(): DownlinkTxInfo;

  getBoard(): number;
  setBoard(value: number): DownlinkTxInfo;

  getAntenna(): number;
  setAntenna(value: number): DownlinkTxInfo;

  getTiming(): Timing | undefined;
  setTiming(value?: Timing): DownlinkTxInfo;
  hasTiming(): boolean;
  clearTiming(): DownlinkTxInfo;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): DownlinkTxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkTxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkTxInfo): DownlinkTxInfo.AsObject;
  static serializeBinaryToWriter(message: DownlinkTxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkTxInfo;
  static deserializeBinaryFromReader(message: DownlinkTxInfo, reader: jspb.BinaryReader): DownlinkTxInfo;
}

export namespace DownlinkTxInfo {
  export type AsObject = {
    frequency: number,
    power: number,
    modulation?: Modulation.AsObject,
    board: number,
    antenna: number,
    timing?: Timing.AsObject,
    context: Uint8Array | string,
  }
}

export class Timing extends jspb.Message {
  getImmediately(): ImmediatelyTimingInfo | undefined;
  setImmediately(value?: ImmediatelyTimingInfo): Timing;
  hasImmediately(): boolean;
  clearImmediately(): Timing;

  getDelay(): DelayTimingInfo | undefined;
  setDelay(value?: DelayTimingInfo): Timing;
  hasDelay(): boolean;
  clearDelay(): Timing;

  getGpsEpoch(): GPSEpochTimingInfo | undefined;
  setGpsEpoch(value?: GPSEpochTimingInfo): Timing;
  hasGpsEpoch(): boolean;
  clearGpsEpoch(): Timing;

  getParametersCase(): Timing.ParametersCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timing.AsObject;
  static toObject(includeInstance: boolean, msg: Timing): Timing.AsObject;
  static serializeBinaryToWriter(message: Timing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timing;
  static deserializeBinaryFromReader(message: Timing, reader: jspb.BinaryReader): Timing;
}

export namespace Timing {
  export type AsObject = {
    immediately?: ImmediatelyTimingInfo.AsObject,
    delay?: DelayTimingInfo.AsObject,
    gpsEpoch?: GPSEpochTimingInfo.AsObject,
  }

  export enum ParametersCase { 
    PARAMETERS_NOT_SET = 0,
    IMMEDIATELY = 1,
    DELAY = 2,
    GPS_EPOCH = 3,
  }
}

export class ImmediatelyTimingInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmediatelyTimingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImmediatelyTimingInfo): ImmediatelyTimingInfo.AsObject;
  static serializeBinaryToWriter(message: ImmediatelyTimingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmediatelyTimingInfo;
  static deserializeBinaryFromReader(message: ImmediatelyTimingInfo, reader: jspb.BinaryReader): ImmediatelyTimingInfo;
}

export namespace ImmediatelyTimingInfo {
  export type AsObject = {
  }
}

export class DelayTimingInfo extends jspb.Message {
  getDelay(): google_protobuf_duration_pb.Duration | undefined;
  setDelay(value?: google_protobuf_duration_pb.Duration): DelayTimingInfo;
  hasDelay(): boolean;
  clearDelay(): DelayTimingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelayTimingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DelayTimingInfo): DelayTimingInfo.AsObject;
  static serializeBinaryToWriter(message: DelayTimingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelayTimingInfo;
  static deserializeBinaryFromReader(message: DelayTimingInfo, reader: jspb.BinaryReader): DelayTimingInfo;
}

export namespace DelayTimingInfo {
  export type AsObject = {
    delay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GPSEpochTimingInfo extends jspb.Message {
  getTimeSinceGpsEpoch(): google_protobuf_duration_pb.Duration | undefined;
  setTimeSinceGpsEpoch(value?: google_protobuf_duration_pb.Duration): GPSEpochTimingInfo;
  hasTimeSinceGpsEpoch(): boolean;
  clearTimeSinceGpsEpoch(): GPSEpochTimingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPSEpochTimingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GPSEpochTimingInfo): GPSEpochTimingInfo.AsObject;
  static serializeBinaryToWriter(message: GPSEpochTimingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPSEpochTimingInfo;
  static deserializeBinaryFromReader(message: GPSEpochTimingInfo, reader: jspb.BinaryReader): GPSEpochTimingInfo;
}

export namespace GPSEpochTimingInfo {
  export type AsObject = {
    timeSinceGpsEpoch?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class UplinkFrame extends jspb.Message {
  getPhyPayload(): Uint8Array | string;
  getPhyPayload_asU8(): Uint8Array;
  getPhyPayload_asB64(): string;
  setPhyPayload(value: Uint8Array | string): UplinkFrame;

  getTxInfoLegacy(): UplinkTxInfoLegacy | undefined;
  setTxInfoLegacy(value?: UplinkTxInfoLegacy): UplinkFrame;
  hasTxInfoLegacy(): boolean;
  clearTxInfoLegacy(): UplinkFrame;

  getRxInfoLegacy(): UplinkRxInfoLegacy | undefined;
  setRxInfoLegacy(value?: UplinkRxInfoLegacy): UplinkFrame;
  hasRxInfoLegacy(): boolean;
  clearRxInfoLegacy(): UplinkFrame;

  getTxInfo(): UplinkTxInfo | undefined;
  setTxInfo(value?: UplinkTxInfo): UplinkFrame;
  hasTxInfo(): boolean;
  clearTxInfo(): UplinkFrame;

  getRxInfo(): UplinkRxInfo | undefined;
  setRxInfo(value?: UplinkRxInfo): UplinkFrame;
  hasRxInfo(): boolean;
  clearRxInfo(): UplinkFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkFrame.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkFrame): UplinkFrame.AsObject;
  static serializeBinaryToWriter(message: UplinkFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkFrame;
  static deserializeBinaryFromReader(message: UplinkFrame, reader: jspb.BinaryReader): UplinkFrame;
}

export namespace UplinkFrame {
  export type AsObject = {
    phyPayload: Uint8Array | string,
    txInfoLegacy?: UplinkTxInfoLegacy.AsObject,
    rxInfoLegacy?: UplinkRxInfoLegacy.AsObject,
    txInfo?: UplinkTxInfo.AsObject,
    rxInfo?: UplinkRxInfo.AsObject,
  }
}

export class UplinkFrameSet extends jspb.Message {
  getPhyPayload(): Uint8Array | string;
  getPhyPayload_asU8(): Uint8Array;
  getPhyPayload_asB64(): string;
  setPhyPayload(value: Uint8Array | string): UplinkFrameSet;

  getTxInfo(): UplinkTxInfo | undefined;
  setTxInfo(value?: UplinkTxInfo): UplinkFrameSet;
  hasTxInfo(): boolean;
  clearTxInfo(): UplinkFrameSet;

  getRxInfoList(): Array<UplinkRxInfo>;
  setRxInfoList(value: Array<UplinkRxInfo>): UplinkFrameSet;
  clearRxInfoList(): UplinkFrameSet;
  addRxInfo(value?: UplinkRxInfo, index?: number): UplinkRxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkFrameSet.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkFrameSet): UplinkFrameSet.AsObject;
  static serializeBinaryToWriter(message: UplinkFrameSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkFrameSet;
  static deserializeBinaryFromReader(message: UplinkFrameSet, reader: jspb.BinaryReader): UplinkFrameSet;
}

export namespace UplinkFrameSet {
  export type AsObject = {
    phyPayload: Uint8Array | string,
    txInfo?: UplinkTxInfo.AsObject,
    rxInfoList: Array<UplinkRxInfo.AsObject>,
  }
}

export class DownlinkFrame extends jspb.Message {
  getDownlinkId(): number;
  setDownlinkId(value: number): DownlinkFrame;

  getDownlinkIdLegacy(): Uint8Array | string;
  getDownlinkIdLegacy_asU8(): Uint8Array;
  getDownlinkIdLegacy_asB64(): string;
  setDownlinkIdLegacy(value: Uint8Array | string): DownlinkFrame;

  getItemsList(): Array<DownlinkFrameItem>;
  setItemsList(value: Array<DownlinkFrameItem>): DownlinkFrame;
  clearItemsList(): DownlinkFrame;
  addItems(value?: DownlinkFrameItem, index?: number): DownlinkFrameItem;

  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): DownlinkFrame;

  getGatewayId(): string;
  setGatewayId(value: string): DownlinkFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkFrame.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkFrame): DownlinkFrame.AsObject;
  static serializeBinaryToWriter(message: DownlinkFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkFrame;
  static deserializeBinaryFromReader(message: DownlinkFrame, reader: jspb.BinaryReader): DownlinkFrame;
}

export namespace DownlinkFrame {
  export type AsObject = {
    downlinkId: number,
    downlinkIdLegacy: Uint8Array | string,
    itemsList: Array<DownlinkFrameItem.AsObject>,
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
  }
}

export class DownlinkFrameItem extends jspb.Message {
  getPhyPayload(): Uint8Array | string;
  getPhyPayload_asU8(): Uint8Array;
  getPhyPayload_asB64(): string;
  setPhyPayload(value: Uint8Array | string): DownlinkFrameItem;

  getTxInfoLegacy(): DownlinkTxInfoLegacy | undefined;
  setTxInfoLegacy(value?: DownlinkTxInfoLegacy): DownlinkFrameItem;
  hasTxInfoLegacy(): boolean;
  clearTxInfoLegacy(): DownlinkFrameItem;

  getTxInfo(): DownlinkTxInfo | undefined;
  setTxInfo(value?: DownlinkTxInfo): DownlinkFrameItem;
  hasTxInfo(): boolean;
  clearTxInfo(): DownlinkFrameItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkFrameItem.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkFrameItem): DownlinkFrameItem.AsObject;
  static serializeBinaryToWriter(message: DownlinkFrameItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkFrameItem;
  static deserializeBinaryFromReader(message: DownlinkFrameItem, reader: jspb.BinaryReader): DownlinkFrameItem;
}

export namespace DownlinkFrameItem {
  export type AsObject = {
    phyPayload: Uint8Array | string,
    txInfoLegacy?: DownlinkTxInfoLegacy.AsObject,
    txInfo?: DownlinkTxInfo.AsObject,
  }
}

export class DownlinkTxAck extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): DownlinkTxAck;

  getGatewayId(): string;
  setGatewayId(value: string): DownlinkTxAck;

  getDownlinkId(): number;
  setDownlinkId(value: number): DownlinkTxAck;

  getDownlinkIdLegacy(): Uint8Array | string;
  getDownlinkIdLegacy_asU8(): Uint8Array;
  getDownlinkIdLegacy_asB64(): string;
  setDownlinkIdLegacy(value: Uint8Array | string): DownlinkTxAck;

  getItemsList(): Array<DownlinkTxAckItem>;
  setItemsList(value: Array<DownlinkTxAckItem>): DownlinkTxAck;
  clearItemsList(): DownlinkTxAck;
  addItems(value?: DownlinkTxAckItem, index?: number): DownlinkTxAckItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkTxAck.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkTxAck): DownlinkTxAck.AsObject;
  static serializeBinaryToWriter(message: DownlinkTxAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkTxAck;
  static deserializeBinaryFromReader(message: DownlinkTxAck, reader: jspb.BinaryReader): DownlinkTxAck;
}

export namespace DownlinkTxAck {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    downlinkId: number,
    downlinkIdLegacy: Uint8Array | string,
    itemsList: Array<DownlinkTxAckItem.AsObject>,
  }
}

export class DownlinkTxAckItem extends jspb.Message {
  getStatus(): TxAckStatus;
  setStatus(value: TxAckStatus): DownlinkTxAckItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkTxAckItem.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkTxAckItem): DownlinkTxAckItem.AsObject;
  static serializeBinaryToWriter(message: DownlinkTxAckItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkTxAckItem;
  static deserializeBinaryFromReader(message: DownlinkTxAckItem, reader: jspb.BinaryReader): DownlinkTxAckItem;
}

export namespace DownlinkTxAckItem {
  export type AsObject = {
    status: TxAckStatus,
  }
}

export class GatewayConfiguration extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): GatewayConfiguration;

  getGatewayId(): string;
  setGatewayId(value: string): GatewayConfiguration;

  getVersion(): string;
  setVersion(value: string): GatewayConfiguration;

  getChannelsList(): Array<ChannelConfiguration>;
  setChannelsList(value: Array<ChannelConfiguration>): GatewayConfiguration;
  clearChannelsList(): GatewayConfiguration;
  addChannels(value?: ChannelConfiguration, index?: number): ChannelConfiguration;

  getStatsInterval(): google_protobuf_duration_pb.Duration | undefined;
  setStatsInterval(value?: google_protobuf_duration_pb.Duration): GatewayConfiguration;
  hasStatsInterval(): boolean;
  clearStatsInterval(): GatewayConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayConfiguration): GatewayConfiguration.AsObject;
  static serializeBinaryToWriter(message: GatewayConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayConfiguration;
  static deserializeBinaryFromReader(message: GatewayConfiguration, reader: jspb.BinaryReader): GatewayConfiguration;
}

export namespace GatewayConfiguration {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    version: string,
    channelsList: Array<ChannelConfiguration.AsObject>,
    statsInterval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GetGatewayIdRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayIdRequest): GetGatewayIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayIdRequest;
  static deserializeBinaryFromReader(message: GetGatewayIdRequest, reader: jspb.BinaryReader): GetGatewayIdRequest;
}

export namespace GetGatewayIdRequest {
  export type AsObject = {
  }
}

export class GetGatewayIdResponse extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): GetGatewayIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayIdResponse): GetGatewayIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetGatewayIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayIdResponse;
  static deserializeBinaryFromReader(message: GetGatewayIdResponse, reader: jspb.BinaryReader): GetGatewayIdResponse;
}

export namespace GetGatewayIdResponse {
  export type AsObject = {
    gatewayId: string,
  }
}

export class GetLocationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
  static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
  export type AsObject = {
  }
}

export class GetLocationResponse extends jspb.Message {
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): GetLocationResponse;
  hasLocation(): boolean;
  clearLocation(): GetLocationResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetLocationResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GetLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
  static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
  static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
  export type AsObject = {
    location?: common_common_pb.Location.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ChannelConfiguration extends jspb.Message {
  getFrequency(): number;
  setFrequency(value: number): ChannelConfiguration;

  getModulationLegacy(): common_common_pb.Modulation;
  setModulationLegacy(value: common_common_pb.Modulation): ChannelConfiguration;

  getLoraModulationConfig(): LoraModulationConfig | undefined;
  setLoraModulationConfig(value?: LoraModulationConfig): ChannelConfiguration;
  hasLoraModulationConfig(): boolean;
  clearLoraModulationConfig(): ChannelConfiguration;

  getFskModulationConfig(): FskModulationConfig | undefined;
  setFskModulationConfig(value?: FskModulationConfig): ChannelConfiguration;
  hasFskModulationConfig(): boolean;
  clearFskModulationConfig(): ChannelConfiguration;

  getBoard(): number;
  setBoard(value: number): ChannelConfiguration;

  getDemodulator(): number;
  setDemodulator(value: number): ChannelConfiguration;

  getModulationConfigCase(): ChannelConfiguration.ModulationConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelConfiguration): ChannelConfiguration.AsObject;
  static serializeBinaryToWriter(message: ChannelConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelConfiguration;
  static deserializeBinaryFromReader(message: ChannelConfiguration, reader: jspb.BinaryReader): ChannelConfiguration;
}

export namespace ChannelConfiguration {
  export type AsObject = {
    frequency: number,
    modulationLegacy: common_common_pb.Modulation,
    loraModulationConfig?: LoraModulationConfig.AsObject,
    fskModulationConfig?: FskModulationConfig.AsObject,
    board: number,
    demodulator: number,
  }

  export enum ModulationConfigCase { 
    MODULATION_CONFIG_NOT_SET = 0,
    LORA_MODULATION_CONFIG = 3,
    FSK_MODULATION_CONFIG = 4,
  }
}

export class LoraModulationConfig extends jspb.Message {
  getBandwidthLegacy(): number;
  setBandwidthLegacy(value: number): LoraModulationConfig;

  getBandwidth(): number;
  setBandwidth(value: number): LoraModulationConfig;

  getSpreadingFactorsList(): Array<number>;
  setSpreadingFactorsList(value: Array<number>): LoraModulationConfig;
  clearSpreadingFactorsList(): LoraModulationConfig;
  addSpreadingFactors(value: number, index?: number): LoraModulationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoraModulationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LoraModulationConfig): LoraModulationConfig.AsObject;
  static serializeBinaryToWriter(message: LoraModulationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoraModulationConfig;
  static deserializeBinaryFromReader(message: LoraModulationConfig, reader: jspb.BinaryReader): LoraModulationConfig;
}

export namespace LoraModulationConfig {
  export type AsObject = {
    bandwidthLegacy: number,
    bandwidth: number,
    spreadingFactorsList: Array<number>,
  }
}

export class FskModulationConfig extends jspb.Message {
  getBandwidthLegacy(): number;
  setBandwidthLegacy(value: number): FskModulationConfig;

  getBandwidth(): number;
  setBandwidth(value: number): FskModulationConfig;

  getBitrate(): number;
  setBitrate(value: number): FskModulationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FskModulationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FskModulationConfig): FskModulationConfig.AsObject;
  static serializeBinaryToWriter(message: FskModulationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FskModulationConfig;
  static deserializeBinaryFromReader(message: FskModulationConfig, reader: jspb.BinaryReader): FskModulationConfig;
}

export namespace FskModulationConfig {
  export type AsObject = {
    bandwidthLegacy: number,
    bandwidth: number,
    bitrate: number,
  }
}

export class GatewayCommandExecRequest extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): GatewayCommandExecRequest;

  getGatewayId(): string;
  setGatewayId(value: string): GatewayCommandExecRequest;

  getCommand(): string;
  setCommand(value: string): GatewayCommandExecRequest;

  getExecId(): number;
  setExecId(value: number): GatewayCommandExecRequest;

  getStdin(): Uint8Array | string;
  getStdin_asU8(): Uint8Array;
  getStdin_asB64(): string;
  setStdin(value: Uint8Array | string): GatewayCommandExecRequest;

  getEnvironmentMap(): jspb.Map<string, string>;
  clearEnvironmentMap(): GatewayCommandExecRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayCommandExecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayCommandExecRequest): GatewayCommandExecRequest.AsObject;
  static serializeBinaryToWriter(message: GatewayCommandExecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayCommandExecRequest;
  static deserializeBinaryFromReader(message: GatewayCommandExecRequest, reader: jspb.BinaryReader): GatewayCommandExecRequest;
}

export namespace GatewayCommandExecRequest {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    command: string,
    execId: number,
    stdin: Uint8Array | string,
    environmentMap: Array<[string, string]>,
  }
}

export class GatewayCommandExecResponse extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): GatewayCommandExecResponse;

  getGatewayId(): string;
  setGatewayId(value: string): GatewayCommandExecResponse;

  getExecId(): number;
  setExecId(value: number): GatewayCommandExecResponse;

  getStdout(): Uint8Array | string;
  getStdout_asU8(): Uint8Array;
  getStdout_asB64(): string;
  setStdout(value: Uint8Array | string): GatewayCommandExecResponse;

  getStderr(): Uint8Array | string;
  getStderr_asU8(): Uint8Array;
  getStderr_asB64(): string;
  setStderr(value: Uint8Array | string): GatewayCommandExecResponse;

  getError(): string;
  setError(value: string): GatewayCommandExecResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayCommandExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayCommandExecResponse): GatewayCommandExecResponse.AsObject;
  static serializeBinaryToWriter(message: GatewayCommandExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayCommandExecResponse;
  static deserializeBinaryFromReader(message: GatewayCommandExecResponse, reader: jspb.BinaryReader): GatewayCommandExecResponse;
}

export namespace GatewayCommandExecResponse {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    execId: number,
    stdout: Uint8Array | string,
    stderr: Uint8Array | string,
    error: string,
  }
}

export class RawPacketForwarderEvent extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): RawPacketForwarderEvent;

  getGatewayId(): string;
  setGatewayId(value: string): RawPacketForwarderEvent;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): RawPacketForwarderEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawPacketForwarderEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RawPacketForwarderEvent): RawPacketForwarderEvent.AsObject;
  static serializeBinaryToWriter(message: RawPacketForwarderEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawPacketForwarderEvent;
  static deserializeBinaryFromReader(message: RawPacketForwarderEvent, reader: jspb.BinaryReader): RawPacketForwarderEvent;
}

export namespace RawPacketForwarderEvent {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    payload: Uint8Array | string,
  }
}

export class RawPacketForwarderCommand extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): RawPacketForwarderCommand;

  getGatewayId(): string;
  setGatewayId(value: string): RawPacketForwarderCommand;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): RawPacketForwarderCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawPacketForwarderCommand.AsObject;
  static toObject(includeInstance: boolean, msg: RawPacketForwarderCommand): RawPacketForwarderCommand.AsObject;
  static serializeBinaryToWriter(message: RawPacketForwarderCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawPacketForwarderCommand;
  static deserializeBinaryFromReader(message: RawPacketForwarderCommand, reader: jspb.BinaryReader): RawPacketForwarderCommand;
}

export namespace RawPacketForwarderCommand {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    payload: Uint8Array | string,
  }
}

export class ConnState extends jspb.Message {
  getGatewayIdLegacy(): Uint8Array | string;
  getGatewayIdLegacy_asU8(): Uint8Array;
  getGatewayIdLegacy_asB64(): string;
  setGatewayIdLegacy(value: Uint8Array | string): ConnState;

  getGatewayId(): string;
  setGatewayId(value: string): ConnState;

  getState(): ConnState.State;
  setState(value: ConnState.State): ConnState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnState.AsObject;
  static toObject(includeInstance: boolean, msg: ConnState): ConnState.AsObject;
  static serializeBinaryToWriter(message: ConnState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnState;
  static deserializeBinaryFromReader(message: ConnState, reader: jspb.BinaryReader): ConnState;
}

export namespace ConnState {
  export type AsObject = {
    gatewayIdLegacy: Uint8Array | string,
    gatewayId: string,
    state: ConnState.State,
  }

  export enum State { 
    OFFLINE = 0,
    ONLINE = 1,
  }
}

export class MeshEventHeartbeat extends jspb.Message {
  getRelayPathList(): Array<MeshEventHeartbeatRelayPath>;
  setRelayPathList(value: Array<MeshEventHeartbeatRelayPath>): MeshEventHeartbeat;
  clearRelayPathList(): MeshEventHeartbeat;
  addRelayPath(value?: MeshEventHeartbeatRelayPath, index?: number): MeshEventHeartbeatRelayPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshEventHeartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: MeshEventHeartbeat): MeshEventHeartbeat.AsObject;
  static serializeBinaryToWriter(message: MeshEventHeartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshEventHeartbeat;
  static deserializeBinaryFromReader(message: MeshEventHeartbeat, reader: jspb.BinaryReader): MeshEventHeartbeat;
}

export namespace MeshEventHeartbeat {
  export type AsObject = {
    relayPathList: Array<MeshEventHeartbeatRelayPath.AsObject>,
  }
}

export class MeshEventHeartbeatRelayPath extends jspb.Message {
  getRelayId(): string;
  setRelayId(value: string): MeshEventHeartbeatRelayPath;

  getRssi(): number;
  setRssi(value: number): MeshEventHeartbeatRelayPath;

  getSnr(): number;
  setSnr(value: number): MeshEventHeartbeatRelayPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshEventHeartbeatRelayPath.AsObject;
  static toObject(includeInstance: boolean, msg: MeshEventHeartbeatRelayPath): MeshEventHeartbeatRelayPath.AsObject;
  static serializeBinaryToWriter(message: MeshEventHeartbeatRelayPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshEventHeartbeatRelayPath;
  static deserializeBinaryFromReader(message: MeshEventHeartbeatRelayPath, reader: jspb.BinaryReader): MeshEventHeartbeatRelayPath;
}

export namespace MeshEventHeartbeatRelayPath {
  export type AsObject = {
    relayId: string,
    rssi: number,
    snr: number,
  }
}

export class MeshEventProprietary extends jspb.Message {
  getEventType(): number;
  setEventType(value: number): MeshEventProprietary;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): MeshEventProprietary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshEventProprietary.AsObject;
  static toObject(includeInstance: boolean, msg: MeshEventProprietary): MeshEventProprietary.AsObject;
  static serializeBinaryToWriter(message: MeshEventProprietary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshEventProprietary;
  static deserializeBinaryFromReader(message: MeshEventProprietary, reader: jspb.BinaryReader): MeshEventProprietary;
}

export namespace MeshEventProprietary {
  export type AsObject = {
    eventType: number,
    payload: Uint8Array | string,
  }
}

export class MeshCommandProprietary extends jspb.Message {
  getCommandType(): number;
  setCommandType(value: number): MeshCommandProprietary;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): MeshCommandProprietary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeshCommandProprietary.AsObject;
  static toObject(includeInstance: boolean, msg: MeshCommandProprietary): MeshCommandProprietary.AsObject;
  static serializeBinaryToWriter(message: MeshCommandProprietary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeshCommandProprietary;
  static deserializeBinaryFromReader(message: MeshCommandProprietary, reader: jspb.BinaryReader): MeshCommandProprietary;
}

export namespace MeshCommandProprietary {
  export type AsObject = {
    commandType: number,
    payload: Uint8Array | string,
  }
}

export enum CodeRate { 
  CR_UNDEFINED = 0,
  CR_4_5 = 1,
  CR_4_6 = 2,
  CR_4_7 = 3,
  CR_4_8 = 4,
  CR_3_8 = 5,
  CR_2_6 = 6,
  CR_1_4 = 7,
  CR_1_6 = 8,
  CR_5_6 = 9,
  CR_LI_4_5 = 10,
  CR_LI_4_6 = 11,
  CR_LI_4_8 = 12,
}
export enum DownlinkTiming { 
  IMMEDIATELY = 0,
  DELAY = 1,
  GPS_EPOCH = 2,
}
export enum FineTimestampType { 
  NONE = 0,
  ENCRYPTED = 1,
  PLAIN = 2,
}
export enum CRCStatus { 
  NO_CRC = 0,
  BAD_CRC = 1,
  CRC_OK = 2,
}
export enum TxAckStatus { 
  IGNORED = 0,
  OK = 1,
  TOO_LATE = 2,
  TOO_EARLY = 3,
  COLLISION_PACKET = 4,
  COLLISION_BEACON = 5,
  TX_FREQ = 6,
  TX_POWER = 7,
  GPS_UNLOCKED = 8,
  QUEUE_FULL = 9,
  INTERNAL_ERROR = 10,
  DUTY_CYCLE_OVERFLOW = 11,
}

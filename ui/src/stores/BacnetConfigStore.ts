import { notification } from "antd";
import { EventEmitter } from "events";

// Types for BACnet configuration
export interface BacnetDeviceConfig {
  id: number;
  name: string;
  address: string;
  object_name?: string;
  vendor_name?: string;
  model_name?: string;
}

export interface BacnetObject {
  id: string;
  name: string;
  object_type: string;
  instance_number: number;
  device_eui: string;
  metric_field: string;
  units: string;
  description: string;
  enabled: boolean;
  value?: number;
  last_updated?: string;
}

export interface BacnetConfig {
  device: BacnetDeviceConfig;
  mqtt?: {
    broker: string;
    port: number;
    username: string | null;
    password: string | null;
  };
  objects: BacnetObject[];
}

export interface BacnetStatus {
  status: string;
  uptime_seconds: number;
  device: {
    id: number;
    name: string;
    address: string;
    port: number;
  };
  objects_count: number;
  objects: BacnetObject[];
}

// BACnet object types
export const BACNET_OBJECT_TYPES = [
  "AnalogInput",
  "AnalogOutput",
  "AnalogValue",
  "BinaryInput",
  "BinaryOutput",
  "BinaryValue",
  "MultiStateInput",
  "MultiStateOutput",
  "MultiStateValue",
];

// BACnet engineering units
export const BACNET_UNITS: { [key: string]: number } = {
  noUnits: 95,
  degreesCelsius: 62,
  degreesFahrenheit: 64,
  percent: 98,
  pascals: 53,
  kilopascals: 54,
  bars: 55,
  metersPerSecond: 74,
  cubicMetersPerHour: 135,
  litersPerSecond: 83,
  watts: 47,
  kilowatts: 48,
  voltAmperes: 61,
  volts: 5,
  milliamperes: 2,
  amperes: 3,
  hertz: 27,
  revolutions_per_minute: 104,
  luxes: 37,
  wattHours: 18,
  kilowattHours: 19,
};

const API_BASE = "/api/bacnet";

class BacnetConfigStore extends EventEmitter {
  constructor() {
    super();
  }

  // Get full configuration
  getConfig = async (): Promise<BacnetConfig> => {
    const resp = await fetch(`${API_BASE}/config`);
    if (!resp.ok) {
      throw new Error(`Failed to get config: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update full configuration
  updateConfig = async (config: BacnetConfig): Promise<void> => {
    const resp = await fetch(`${API_BASE}/config`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to update config");
    }
    notification.success({
      message: "Configuration updated",
      duration: 3,
    });
    this.emit("change");
  };

  // Get device settings
  getDeviceConfig = async (): Promise<BacnetDeviceConfig> => {
    const resp = await fetch(`${API_BASE}/config/device`);
    if (!resp.ok) {
      throw new Error(`Failed to get device config: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update device settings
  updateDeviceConfig = async (config: BacnetDeviceConfig): Promise<void> => {
    const resp = await fetch(`${API_BASE}/config/device`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to update device config");
    }
    notification.success({
      message: "Device configuration updated",
      duration: 3,
    });
    this.emit("change");
  };

  // List all objects
  listObjects = async (): Promise<{ objects: BacnetObject[]; total: number }> => {
    const resp = await fetch(`${API_BASE}/objects`);
    if (!resp.ok) {
      throw new Error(`Failed to list objects: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Create a new object
  createObject = async (obj: Omit<BacnetObject, "id" | "value" | "last_updated">): Promise<string> => {
    const resp = await fetch(`${API_BASE}/objects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to create object");
    }
    const result = await resp.json();
    notification.success({
      message: "Object created",
      duration: 3,
    });
    this.emit("change");
    return result.id;
  };

  // Get a specific object
  getObject = async (id: string): Promise<BacnetObject> => {
    const resp = await fetch(`${API_BASE}/objects/${id}`);
    if (!resp.ok) {
      throw new Error(`Failed to get object: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update an object
  updateObject = async (id: string, obj: Partial<BacnetObject>): Promise<void> => {
    const resp = await fetch(`${API_BASE}/objects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to update object");
    }
    notification.success({
      message: "Object updated",
      duration: 3,
    });
    this.emit("change");
  };

  // Delete an object
  deleteObject = async (id: string): Promise<void> => {
    const resp = await fetch(`${API_BASE}/objects/${id}`, {
      method: "DELETE",
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to delete object");
    }
    notification.success({
      message: "Object deleted",
      duration: 3,
    });
    this.emit("change");
  };

  // Get service status
  getStatus = async (): Promise<BacnetStatus> => {
    const resp = await fetch(`${API_BASE}/status`);
    if (!resp.ok) {
      throw new Error(`Failed to get status: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Restart service (reload configuration)
  restartService = async (): Promise<void> => {
    const resp = await fetch(`${API_BASE}/service/restart`, {
      method: "POST",
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to restart service");
    }
    notification.success({
      message: "Service restarted",
      duration: 3,
    });
    this.emit("change");
  };

  // Export configuration
  exportConfig = (): void => {
    window.open(`${API_BASE}/export`, "_blank");
  };

  // Import configuration
  importConfig = async (file: File): Promise<void> => {
    const formData = new FormData();
    formData.append("file", file);

    const resp = await fetch(`${API_BASE}/import`, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to import config");
    }
    notification.success({
      message: "Configuration imported",
      duration: 3,
    });
    this.emit("change");
  };

  // Get available object types
  getObjectTypes = async (): Promise<string[]> => {
    const resp = await fetch(`${API_BASE}/object-types`);
    if (!resp.ok) {
      return BACNET_OBJECT_TYPES;
    }
    const data = await resp.json();
    return data.object_types || BACNET_OBJECT_TYPES;
  };

  // Get available units
  getUnits = async (): Promise<{ [key: string]: number }> => {
    const resp = await fetch(`${API_BASE}/units`);
    if (!resp.ok) {
      return BACNET_UNITS;
    }
    const data = await resp.json();
    return data.units || BACNET_UNITS;
  };
}

const bacnetConfigStore = new BacnetConfigStore();
export default bacnetConfigStore;

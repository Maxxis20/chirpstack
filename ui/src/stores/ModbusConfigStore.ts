import { notification } from "antd";
import { EventEmitter } from "events";

// Types for Modbus configuration
export interface ModbusServerConfig {
  address: string;
  port: number;
  unit_id: number;
}

export interface ModbusMapping {
  id: string;
  name: string;
  register_type: string;
  address: number;
  data_type: string;
  scale: number;
  device_eui: string;
  metric_field: string;
  description: string;
  enabled: boolean;
  value?: number;
  last_updated?: string;
}

export interface ModbusConfig {
  server: ModbusServerConfig;
  device?: {
    vendor_name: string;
    product_code: string;
    product_url: string;
    model_name: string;
    version: string;
  };
  mqtt?: {
    broker: string;
    port: number;
    username: string | null;
    password: string | null;
  };
  registers: ModbusMapping[];
}

export interface ModbusStatus {
  status: string;
  uptime_seconds: number;
  server: ModbusServerConfig;
  registers_count: number;
  registers: ModbusMapping[];
}

// Use port 80 (nginx) for API calls - nginx proxies to the Modbus service on port 1502
const getApiBase = () => {
  const host = window.location.hostname;
  return `http://${host}/api/modbus`;
};
const API_BASE = getApiBase();

class ModbusConfigStore extends EventEmitter {
  constructor() {
    super();
  }

  // Get full configuration
  getConfig = async (): Promise<ModbusConfig> => {
    const resp = await fetch(`${API_BASE}/config`);
    if (!resp.ok) {
      throw new Error(`Failed to get config: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update full configuration
  updateConfig = async (config: ModbusConfig): Promise<void> => {
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

  // Get server settings
  getServerConfig = async (): Promise<ModbusServerConfig> => {
    const resp = await fetch(`${API_BASE}/config/server`);
    if (!resp.ok) {
      throw new Error(`Failed to get server config: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update server settings
  updateServerConfig = async (config: ModbusServerConfig): Promise<void> => {
    const resp = await fetch(`${API_BASE}/config/server`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to update server config");
    }
    notification.success({
      message: "Server configuration updated",
      duration: 3,
    });
    this.emit("change");
  };

  // List all mappings
  listMappings = async (): Promise<{ mappings: ModbusMapping[]; total: number }> => {
    const resp = await fetch(`${API_BASE}/mappings`);
    if (!resp.ok) {
      throw new Error(`Failed to list mappings: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Create a new mapping
  createMapping = async (mapping: Omit<ModbusMapping, "id" | "value" | "last_updated">): Promise<string> => {
    const resp = await fetch(`${API_BASE}/mappings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mapping),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to create mapping");
    }
    const result = await resp.json();
    notification.success({
      message: "Mapping created",
      duration: 3,
    });
    this.emit("change");
    return result.id;
  };

  // Get a specific mapping
  getMapping = async (id: string): Promise<ModbusMapping> => {
    const resp = await fetch(`${API_BASE}/mappings/${id}`);
    if (!resp.ok) {
      throw new Error(`Failed to get mapping: ${resp.statusText}`);
    }
    return resp.json();
  };

  // Update a mapping
  updateMapping = async (id: string, mapping: Partial<ModbusMapping>): Promise<void> => {
    const resp = await fetch(`${API_BASE}/mappings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mapping),
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to update mapping");
    }
    notification.success({
      message: "Mapping updated",
      duration: 3,
    });
    this.emit("change");
  };

  // Delete a mapping
  deleteMapping = async (id: string): Promise<void> => {
    const resp = await fetch(`${API_BASE}/mappings/${id}`, {
      method: "DELETE",
    });
    if (!resp.ok) {
      const error = await resp.json();
      throw new Error(error.message || "Failed to delete mapping");
    }
    notification.success({
      message: "Mapping deleted",
      duration: 3,
    });
    this.emit("change");
  };

  // Get service status
  getStatus = async (): Promise<ModbusStatus> => {
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
}

const modbusConfigStore = new ModbusConfigStore();
export default modbusConfigStore;

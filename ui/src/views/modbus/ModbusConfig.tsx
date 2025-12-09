import { useState, useEffect } from "react";
import {
  Card,
  Table,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Modal,
  Tag,
  Popconfirm,
  Row,
  Col,
  Statistic,
  Upload,
  Switch,
  message,
  Spin,
  Alert,
} from "antd";
import {
  PlusOutlined,
  ReloadOutlined,
  DownloadOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { UploadProps } from "antd";

import modbusConfigStore, {
  ModbusMapping,
  ModbusServerConfig,
  ModbusStatus,
} from "../../stores/ModbusConfigStore";
import DeviceFieldSelector from "../../components/DeviceFieldSelector";

const { Option } = Select;

const REGISTER_TYPES = ["HoldingRegister", "InputRegister", "Coil", "DiscreteInput"];
const DATA_TYPES = ["int16", "uint16", "int32", "uint32", "float32", "bool"];

function ModbusConfig() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ModbusStatus | null>(null);
  const [mappings, setMappings] = useState<ModbusMapping[]>([]);
  const [serverConfig, setServerConfig] = useState<ModbusServerConfig>({
    address: "0.0.0.0",
    port: 502,
    unit_id: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMapping, setEditingMapping] = useState<ModbusMapping | null>(null);
  const [savingServer, setSavingServer] = useState(false);
  const [savingMapping, setSavingMapping] = useState(false);

  const [form] = Form.useForm();
  const [serverForm] = Form.useForm();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [statusResp, mappingsResp] = await Promise.all([
        modbusConfigStore.getStatus(),
        modbusConfigStore.listMappings(),
      ]);
      setStatus(statusResp);
      setMappings(mappingsResp.mappings);
      setServerConfig(statusResp.server);
      serverForm.setFieldsValue(statusResp.server);
    } catch (err: any) {
      setError(err.message || "Failed to load Modbus configuration");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleChange = () => loadData();
    modbusConfigStore.on("change", handleChange);
    return () => {
      modbusConfigStore.off("change", handleChange);
    };
  }, []);

  const handleSaveServerConfig = async (values: ModbusServerConfig) => {
    setSavingServer(true);
    try {
      await modbusConfigStore.updateServerConfig(values);
    } catch (err: any) {
      message.error(err.message || "Failed to save server configuration");
    } finally {
      setSavingServer(false);
    }
  };

  const handleRestartService = async () => {
    try {
      await modbusConfigStore.restartService();
      await loadData();
    } catch (err: any) {
      message.error(err.message || "Failed to restart service");
    }
  };

  const handleOpenModal = (mapping?: ModbusMapping) => {
    if (mapping) {
      setEditingMapping(mapping);
      form.setFieldsValue(mapping);
    } else {
      setEditingMapping(null);
      form.resetFields();
      form.setFieldsValue({
        register_type: "InputRegister",
        data_type: "int16",
        scale: 1,
        enabled: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingMapping(null);
    form.resetFields();
  };

  const handleSaveMapping = async (values: any) => {
    setSavingMapping(true);
    try {
      if (editingMapping) {
        await modbusConfigStore.updateMapping(editingMapping.id, values);
      } else {
        await modbusConfigStore.createMapping(values);
      }
      handleCloseModal();
    } catch (err: any) {
      message.error(err.message || "Failed to save mapping");
    } finally {
      setSavingMapping(false);
    }
  };

  const handleDeleteMapping = async (id: string) => {
    try {
      await modbusConfigStore.deleteMapping(id);
    } catch (err: any) {
      message.error(err.message || "Failed to delete mapping");
    }
  };

  const uploadProps: UploadProps = {
    name: "file",
    accept: ".json",
    showUploadList: false,
    beforeUpload: async file => {
      try {
        await modbusConfigStore.importConfig(file);
        await loadData();
      } catch (err: any) {
        message.error(err.message || "Failed to import configuration");
      }
      return false;
    },
  };

  const columns: ColumnsType<ModbusMapping> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          {text}
          {!record.enabled && <Tag color="default">Disabled</Tag>}
        </Space>
      ),
    },
    {
      title: "Type",
      dataIndex: "register_type",
      key: "register_type",
      render: type => <Tag color="blue">{type}</Tag>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Data Type",
      dataIndex: "data_type",
      key: "data_type",
    },
    {
      title: "Device EUI",
      dataIndex: "device_eui",
      key: "device_eui",
      render: eui => (eui ? <code>{eui}</code> : <span style={{ color: "#999" }}>Not set</span>),
    },
    {
      title: "Metric Field",
      dataIndex: "metric_field",
      key: "metric_field",
      render: field => (field ? field : <span style={{ color: "#999" }}>Not set</span>),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value, record) => (
        <Space>
          <span>{value !== undefined ? value : "-"}</span>
          {record.last_updated && (
            <span style={{ fontSize: "0.8em", color: "#999" }}>
              ({new Date(record.last_updated).toLocaleTimeString()})
            </span>
          )}
        </Space>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleOpenModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete this mapping?"
            onConfirm={() => handleDeleteMapping(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (loading && !status) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        action={
          <Button onClick={loadData} type="primary">
            Retry
          </Button>
        }
      />
    );
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Status Card */}
      <Card
        title="Service Status"
        extra={
          <Space>
            <Button icon={<ReloadOutlined />} onClick={loadData}>
              Refresh
            </Button>
            <Button type="primary" onClick={handleRestartService}>
              Restart Service
            </Button>
          </Space>
        }
      >
        <Row gutter={16}>
          <Col span={6}>
            <Statistic
              title="Status"
              value={status?.status || "Unknown"}
              valueStyle={{ color: status?.status === "running" ? "#3f8600" : "#cf1322" }}
              prefix={status?.status === "running" ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Uptime"
              value={status?.uptime_seconds ? Math.floor(status.uptime_seconds / 60) : 0}
              suffix="min"
            />
          </Col>
          <Col span={6}>
            <Statistic title="Registers" value={status?.registers_count || 0} />
          </Col>
          <Col span={6}>
            <Statistic title="Port" value={status?.server.port || 502} />
          </Col>
        </Row>
      </Card>

      {/* Server Settings Card */}
      <Card title="Server Settings">
        <Form
          form={serverForm}
          layout="inline"
          initialValues={serverConfig}
          onFinish={handleSaveServerConfig}
        >
          <Form.Item name="address" label="Bind Address" rules={[{ required: true }]}>
            <Input placeholder="0.0.0.0" style={{ width: 150 }} />
          </Form.Item>
          <Form.Item name="port" label="Port" rules={[{ required: true }]}>
            <InputNumber min={1} max={65535} placeholder="502" />
          </Form.Item>
          <Form.Item name="unit_id" label="Unit ID" rules={[{ required: true }]}>
            <InputNumber min={1} max={247} placeholder="1" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={savingServer}>
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Mappings Card */}
      <Card
        title="Register Mappings"
        extra={
          <Space>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Import</Button>
            </Upload>
            <Button icon={<DownloadOutlined />} onClick={() => modbusConfigStore.exportConfig()}>
              Export
            </Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => handleOpenModal()}>
              Add Mapping
            </Button>
          </Space>
        }
      >
        <Table
          columns={columns}
          dataSource={mappings}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          loading={loading}
        />
      </Card>

      {/* Add/Edit Mapping Modal */}
      <Modal
        title={editingMapping ? "Edit Mapping" : "Add Mapping"}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleSaveMapping}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name is required" }]}>
                <Input placeholder="Temperature Sensor 1" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="enabled" label="Enabled" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="register_type"
                label="Register Type"
                rules={[{ required: true, message: "Register type is required" }]}
              >
                <Select placeholder="Select register type">
                  {REGISTER_TYPES.map(type => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Address is required" }]}
              >
                <InputNumber min={0} max={65535} style={{ width: "100%" }} placeholder="0" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="data_type"
                label="Data Type"
                rules={[{ required: true, message: "Data type is required" }]}
              >
                <Select placeholder="Select data type">
                  {DATA_TYPES.map(type => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="scale" label="Scale Factor">
                <InputNumber step={0.1} style={{ width: "100%" }} placeholder="1.0" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="LoRaWAN Device & Data Field"
                extra="Select a device and the data field to map to this Modbus register"
              >
                <DeviceFieldSelector
                  deviceEui={form.getFieldValue("device_eui")}
                  metricField={form.getFieldValue("metric_field")}
                  onDeviceChange={devEui => form.setFieldsValue({ device_eui: devEui })}
                  onFieldChange={field => form.setFieldsValue({ metric_field: field })}
                />
              </Form.Item>
              {/* Hidden fields to store the values */}
              <Form.Item name="device_eui" hidden>
                <Input />
              </Form.Item>
              <Form.Item name="metric_field" hidden>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={2} placeholder="Optional description" />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" loading={savingMapping}>
                {editingMapping ? "Update" : "Create"}
              </Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default ModbusConfig;

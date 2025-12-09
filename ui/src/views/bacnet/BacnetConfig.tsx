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

import bacnetConfigStore, {
  BacnetObject,
  BacnetDeviceConfig,
  BacnetStatus,
  BACNET_OBJECT_TYPES,
  BACNET_UNITS,
} from "../../stores/BacnetConfigStore";
import DeviceFieldSelector from "../../components/DeviceFieldSelector";

const { Option } = Select;

function BacnetConfig() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<BacnetStatus | null>(null);
  const [objects, setObjects] = useState<BacnetObject[]>([]);
  const [deviceConfig, setDeviceConfig] = useState<BacnetDeviceConfig>({
    id: 100001,
    name: "ChirpStack BACnet Gateway",
    address: "0.0.0.0",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingObject, setEditingObject] = useState<BacnetObject | null>(null);
  const [savingDevice, setSavingDevice] = useState(false);
  const [savingObject, setSavingObject] = useState(false);

  const [form] = Form.useForm();
  const [deviceForm] = Form.useForm();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [statusResp, objectsResp] = await Promise.all([
        bacnetConfigStore.getStatus(),
        bacnetConfigStore.listObjects(),
      ]);
      setStatus(statusResp);
      setObjects(objectsResp.objects);
      setDeviceConfig({
        id: statusResp.device.id,
        name: statusResp.device.name,
        address: statusResp.device.address,
      });
      deviceForm.setFieldsValue({
        id: statusResp.device.id,
        name: statusResp.device.name,
        address: statusResp.device.address,
      });
    } catch (err: any) {
      setError(err.message || "Failed to load BACnet configuration");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleChange = () => loadData();
    bacnetConfigStore.on("change", handleChange);
    return () => {
      bacnetConfigStore.off("change", handleChange);
    };
  }, []);

  const handleSaveDeviceConfig = async (values: BacnetDeviceConfig) => {
    setSavingDevice(true);
    try {
      await bacnetConfigStore.updateDeviceConfig(values);
    } catch (err: any) {
      message.error(err.message || "Failed to save device configuration");
    } finally {
      setSavingDevice(false);
    }
  };

  const handleRestartService = async () => {
    try {
      await bacnetConfigStore.restartService();
      await loadData();
    } catch (err: any) {
      message.error(err.message || "Failed to restart service");
    }
  };

  const handleOpenModal = (obj?: BacnetObject) => {
    if (obj) {
      setEditingObject(obj);
      form.setFieldsValue(obj);
    } else {
      setEditingObject(null);
      form.resetFields();
      form.setFieldsValue({
        object_type: "AnalogInput",
        units: "noUnits",
        enabled: true,
        instance_number: objects.length > 0 ? Math.max(...objects.map(o => o.instance_number)) + 1 : 0,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingObject(null);
    form.resetFields();
  };

  const handleSaveObject = async (values: any) => {
    setSavingObject(true);
    try {
      if (editingObject) {
        await bacnetConfigStore.updateObject(editingObject.id, values);
      } else {
        await bacnetConfigStore.createObject(values);
      }
      handleCloseModal();
    } catch (err: any) {
      message.error(err.message || "Failed to save object");
    } finally {
      setSavingObject(false);
    }
  };

  const handleDeleteObject = async (id: string) => {
    try {
      await bacnetConfigStore.deleteObject(id);
    } catch (err: any) {
      message.error(err.message || "Failed to delete object");
    }
  };

  const uploadProps: UploadProps = {
    name: "file",
    accept: ".json",
    showUploadList: false,
    beforeUpload: async file => {
      try {
        await bacnetConfigStore.importConfig(file);
        await loadData();
      } catch (err: any) {
        message.error(err.message || "Failed to import configuration");
      }
      return false;
    },
  };

  const getObjectTypeColor = (type: string): string => {
    switch (type) {
      case "AnalogInput":
      case "AnalogOutput":
      case "AnalogValue":
        return "blue";
      case "BinaryInput":
      case "BinaryOutput":
      case "BinaryValue":
        return "green";
      case "MultiStateInput":
      case "MultiStateOutput":
      case "MultiStateValue":
        return "orange";
      default:
        return "default";
    }
  };

  const columns: ColumnsType<BacnetObject> = [
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
      title: "Object Type",
      dataIndex: "object_type",
      key: "object_type",
      render: type => <Tag color={getObjectTypeColor(type)}>{type}</Tag>,
    },
    {
      title: "Instance",
      dataIndex: "instance_number",
      key: "instance_number",
    },
    {
      title: "Units",
      dataIndex: "units",
      key: "units",
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
            title="Delete this object?"
            onConfirm={() => handleDeleteObject(record.id)}
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
            <Statistic title="Objects" value={status?.objects_count || 0} />
          </Col>
          <Col span={6}>
            <Statistic title="Device ID" value={status?.device.id || 100001} />
          </Col>
        </Row>
      </Card>

      {/* Device Settings Card */}
      <Card title="Device Settings">
        <Form
          form={deviceForm}
          layout="inline"
          initialValues={deviceConfig}
          onFinish={handleSaveDeviceConfig}
        >
          <Form.Item name="id" label="Device ID" rules={[{ required: true }]}>
            <InputNumber min={1} max={4194302} style={{ width: 120 }} placeholder="100001" />
          </Form.Item>
          <Form.Item name="name" label="Device Name" rules={[{ required: true }]}>
            <Input placeholder="ChirpStack BACnet Gateway" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item name="address" label="Bind Address" rules={[{ required: true }]}>
            <Input placeholder="0.0.0.0" style={{ width: 120 }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={savingDevice}>
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Objects Card */}
      <Card
        title="BACnet Objects"
        extra={
          <Space>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Import</Button>
            </Upload>
            <Button icon={<DownloadOutlined />} onClick={() => bacnetConfigStore.exportConfig()}>
              Export
            </Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => handleOpenModal()}>
              Add Object
            </Button>
          </Space>
        }
      >
        <Table
          columns={columns}
          dataSource={objects}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          loading={loading}
        />
      </Card>

      {/* Add/Edit Object Modal */}
      <Modal
        title={editingObject ? "Edit Object" : "Add Object"}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
      >
        <Form form={form} layout="vertical" onFinish={handleSaveObject}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name is required" }]}>
                <Input placeholder="Temperature AI-1" />
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
                name="object_type"
                label="Object Type"
                rules={[{ required: true, message: "Object type is required" }]}
              >
                <Select placeholder="Select object type">
                  {BACNET_OBJECT_TYPES.map(type => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="instance_number"
                label="Instance Number"
                rules={[{ required: true, message: "Instance number is required" }]}
              >
                <InputNumber min={0} max={4194302} style={{ width: "100%" }} placeholder="0" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="units" label="Engineering Units">
                <Select placeholder="Select units" style={{ width: "50%" }}>
                  {Object.keys(BACNET_UNITS).map(unit => (
                    <Option key={unit} value={unit}>
                      {unit}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="LoRaWAN Device & Data Field"
                extra="Select a device and the data field to map to this BACnet object"
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
              <Button type="primary" htmlType="submit" loading={savingObject}>
                {editingObject ? "Update" : "Create"}
              </Button>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default BacnetConfig;

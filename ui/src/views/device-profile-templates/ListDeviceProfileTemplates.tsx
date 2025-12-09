import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { Space, Breadcrumb, Button, Select, Row, Col } from "antd";
import type { ColumnsType } from "antd/es/table";
import { PageHeader } from "@ant-design/pro-layout";

import type {
  ListDeviceProfileTemplatesResponse,
  DeviceProfileTemplateListItem,
} from "@chirpstack/chirpstack-api-grpc-web/api/device_profile_template_pb";
import { ListDeviceProfileTemplatesRequest } from "@chirpstack/chirpstack-api-grpc-web/api/device_profile_template_pb";
import { Region } from "@chirpstack/chirpstack-api-grpc-web/common/common_pb";

import { getEnumName } from "../helpers";
import type { GetPageCallbackFunc } from "../../components/DataTable";
import DataTable from "../../components/DataTable";
import DeviceProfileTemplateStore from "../../stores/DeviceProfileTemplateStore";
import { useTitle } from "../helpers";

function ListDeviceProfileTemplates() {
  useTitle("Network Server", "Device-profile templates");
  const [regionFilter, setRegionFilter] = useState<number | undefined>(Region.EU868);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const columns: ColumnsType<DeviceProfileTemplateListItem.AsObject> = [
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Link to={`/device-profile-templates/${record.id}/edit`}>{text}</Link>,
    },
    {
      title: "Firmware",
      dataIndex: "firmware",
      key: "firmware",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      width: 150,
      render: (text, record) => {
        return getEnumName(Region, record.region);
      },
    },
  ];

  const onRegionFilterChange = (value: number | undefined) => {
    setRegionFilter(value);
    setRefreshKey(k => k + 1);
  };

  const getPage = useCallback(
    (
      limit: number,
      offset: number,
      _filters: object,
      orderBy: string | void,
      orderByDesc: boolean | void,
      callbackFunc: GetPageCallbackFunc,
    ) => {
      const req = new ListDeviceProfileTemplatesRequest();
      // Fetch more items to allow for client-side filtering
      req.setLimit(10000);
      req.setOffset(0);

      DeviceProfileTemplateStore.list(req, (resp: ListDeviceProfileTemplatesResponse) => {
        const obj = resp.toObject();
        // Apply region filter client-side
        let filtered = obj.resultList;
        if (regionFilter !== undefined) {
          filtered = obj.resultList.filter(item => item.region === regionFilter);
        }
        // Apply pagination to filtered results
        const paged = filtered.slice(offset, offset + limit);
        callbackFunc(filtered.length, paged);
      });
    },
    [regionFilter],
  );

  // Build region options from the Region enum
  const regionOptions = [
    { value: undefined, label: "All Regions" },
    { value: Region.EU868, label: "EU868" },
    { value: Region.US915, label: "US915" },
    { value: Region.CN779, label: "CN779" },
    { value: Region.EU433, label: "EU433" },
    { value: Region.AU915, label: "AU915" },
    { value: Region.CN470, label: "CN470" },
    { value: Region.AS923, label: "AS923" },
    { value: Region.AS923_2, label: "AS923-2" },
    { value: Region.AS923_3, label: "AS923-3" },
    { value: Region.AS923_4, label: "AS923-4" },
    { value: Region.KR920, label: "KR920" },
    { value: Region.IN865, label: "IN865" },
    { value: Region.RU864, label: "RU864" },
    { value: Region.ISM2400, label: "ISM2400" },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <PageHeader
        breadcrumbRender={() => (
          <Breadcrumb>
            <Breadcrumb.Item>
              <span>Network Server</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span>Device-profile templates</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        )}
        title="Device-profile templates"
        extra={[
          <Button type="primary" key="add">
            <Link to={`/device-profile-templates/create`}>Add device-profile template</Link>
          </Button>,
        ]}
      />
      <Row gutter={16}>
        <Col>
          <span style={{ marginRight: 8 }}>Region:</span>
          <Select
            style={{ width: 150 }}
            value={regionFilter}
            onChange={onRegionFilterChange}
            options={regionOptions}
          />
        </Col>
      </Row>
      <DataTable columns={columns} getPage={getPage} rowKey="id" refreshKey={refreshKey} />
    </Space>
  );
}

export default ListDeviceProfileTemplates;

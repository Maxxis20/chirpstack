# TODO: Modbus TCP & BACnet Management UI Implementation

## Overview
Implement a comprehensive Modbus TCP and BACnet management interface in the ChirpStack Network Server UI, similar to Milesight UG65/UG67 gateway functionality. This will allow users to easily map LoRaWAN device metrics to Modbus registers and BACnet objects with real-time value updates.

---

## Phase 1: Backend API Development (5-7 days)

### 1.1 Configuration Management API
- [ ] Create REST endpoints for Modbus configuration CRUD operations
  - `GET /api/modbus/config` - Get current configuration
  - `POST /api/modbus/config` - Update configuration
  - `GET /api/modbus/mappings` - List all register mappings
  - `POST /api/modbus/mappings` - Add new register mapping
  - `PUT /api/modbus/mappings/:id` - Update mapping
  - `DELETE /api/modbus/mappings/:id` - Delete mapping

- [ ] Create REST endpoints for BACnet configuration CRUD operations
  - `GET /api/bacnet/config` - Get current configuration
  - `POST /api/bacnet/config` - Update configuration
  - `GET /api/bacnet/objects` - List all BACnet objects
  - `POST /api/bacnet/objects` - Add new object
  - `PUT /api/bacnet/objects/:id` - Update object
  - `DELETE /api/bacnet/objects/:id` - Delete object

### 1.2 Device Metrics Discovery API
- [ ] Create endpoint to list all available LoRaWAN devices
  - `GET /api/devices/with-metrics` - Returns devices with their latest metrics
- [ ] Create endpoint to get device metric schema
  - `GET /api/devices/:devEUI/metrics/schema` - Returns available metric fields
- [ ] Create endpoint for real-time metric values
  - `GET /api/devices/:devEUI/metrics/current` - Current metric values

### 1.3 Service Control API
- [ ] Modbus service control endpoints
  - `POST /api/modbus/service/start` - Start Modbus service
  - `POST /api/modbus/service/stop` - Stop Modbus service
  - `POST /api/modbus/service/restart` - Restart Modbus service
  - `GET /api/modbus/service/status` - Get service status

- [ ] BACnet service control endpoints
  - `POST /api/bacnet/service/start` - Start BACnet service
  - `POST /api/bacnet/service/stop` - Stop BACnet service
  - `POST /api/bacnet/service/restart` - Restart BACnet service
  - `GET /api/bacnet/service/status` - Get service status

### 1.4 Import/Export API
- [ ] Configuration export endpoints
  - `GET /api/modbus/export` - Export Modbus configuration as JSON
  - `GET /api/bacnet/export` - Export BACnet configuration as JSON
  - `GET /api/modbus/export/example` - Download example configuration template
  - `GET /api/bacnet/export/example` - Download example configuration template

- [ ] Configuration import endpoints
  - `POST /api/modbus/import` - Import Modbus configuration from JSON
  - `POST /api/bacnet/import` - Import BACnet configuration from JSON

### 1.5 Validation & Error Handling
- [ ] Implement configuration validation
  - Validate register/address ranges
  - Check for conflicts (duplicate addresses)
  - Verify device EUI exists
  - Validate metric field names
- [ ] Implement proper error responses with detailed messages
- [ ] Add logging for all API operations

---

## Phase 2: Configuration Storage & Schema (2-3 days)

### 2.1 Modbus Configuration Schema
- [ ] Define JSON schema for Modbus configuration
```json
{
  "server": {
    "address": "0.0.0.0",
    "port": 502,
    "unit_id": 1
  },
  "mappings": [
    {
      "id": "uuid",
      "name": "Temperature Sensor 1",
      "register_type": "InputRegister",
      "address": 0,
      "data_type": "float32",
      "scale": 1.0,
      "device_eui": "0000000000000001",
      "metric_field": "temperature",
      "description": "Room temperature in Celsius",
      "enabled": true
    }
  ]
}
```

- [ ] Create example Modbus configuration template with common scenarios:
  - Temperature sensors
  - Humidity sensors
  - Door/window contacts (coils)
  - Multi-sensor devices

### 2.2 BACnet Configuration Schema
- [ ] Define JSON schema for BACnet configuration
```json
{
  "device": {
    "device_id": 100,
    "device_name": "ChirpStack Gateway",
    "address": "0.0.0.0",
    "port": 47808,
    "vendor_name": "MaxLora",
    "model_name": "Gateway OS"
  },
  "objects": [
    {
      "id": "uuid",
      "name": "Temperature AI-1",
      "object_type": "AnalogInput",
      "instance_number": 0,
      "device_eui": "0000000000000001",
      "metric_field": "temperature",
      "units": "degreesCelsius",
      "description": "Room temperature sensor",
      "enabled": true
    }
  ]
}
```

- [ ] Create example BACnet configuration template with common object types:
  - Analog Inputs (AI) - Temperature, humidity, etc.
  - Analog Values (AV) - Setpoints, calculated values
  - Binary Inputs (BI) - Door contacts, motion sensors
  - Binary Values (BV) - Control outputs

### 2.3 Configuration File Management
- [ ] Implement configuration file read/write operations
  - Location: `/etc/chirpstack-modbus/config.json`
  - Location: `/etc/chirpstack-bacnet/config.json`
- [ ] Add configuration backup on changes
- [ ] Implement atomic file writes (temp file + rename)
- [ ] Add configuration versioning/migration support

---

## Phase 3: Frontend UI Development (7-10 days)

### 3.1 Modbus Configuration Page (`/modbus`)
- [ ] Create main Modbus management interface
  - Server settings form (address, port, unit ID)
  - Service status indicator (running/stopped)
  - Service control buttons (start/stop/restart)

### 3.2 Modbus Register Mapping Interface
- [ ] Create register mappings table with columns:
  - Register Type, Address, Name, Device, Metric, Data Type, Value, Actions
- [ ] Add "Create Mapping" button → opens modal/drawer
- [ ] Implement mapping form with:
  - Device selector (dropdown with search)
  - Metric field selector (populated from device schema)
  - Register type selector (Holding/Input/Coil/Discrete)
  - Address input (with validation)
  - Data type selector (int16, uint16, int32, uint32, float32, bool)
  - Scale factor input
  - Name and description fields
- [ ] Add edit/delete actions for each mapping
- [ ] Show current value in table (real-time update)
- [ ] Add bulk delete functionality
- [ ] Implement drag-and-drop reordering

### 3.3 BACnet Configuration Page (`/bacnet`)
- [ ] Create main BACnet management interface
  - Device settings form (device ID, name, address, port)
  - Service status indicator
  - Service control buttons

### 3.4 BACnet Object Mapping Interface
- [ ] Create BACnet objects table with columns:
  - Object Type, Instance, Name, Device, Metric, Units, Value, Actions
- [ ] Add "Create Object" button → opens modal/drawer
- [ ] Implement object form with:
  - Device selector
  - Metric field selector
  - Object type selector (AI, AO, AV, BI, BO, BV, MSI, MSO, MSV)
  - Instance number input (with auto-increment suggestion)
  - Units selector (for analog objects)
  - Name and description fields
- [ ] Add edit/delete actions for each object
- [ ] Show current value in table
- [ ] Add bulk delete functionality

### 3.5 Device Metrics Browser Component
- [ ] Create reusable component for browsing available devices and metrics
- [ ] Show device list with:
  - Device EUI, Name, Application, Profile, Last Seen
- [ ] Expand device to show available metrics with:
  - Metric name, Type, Current value, Last updated
- [ ] Add "Map to Modbus/BACnet" quick action button
- [ ] Implement search/filter functionality

### 3.6 Import/Export Interface
- [ ] Add Import/Export section to both pages
- [ ] Export functionality:
  - "Export Configuration" button → downloads JSON file
  - Show export preview before download
- [ ] Import functionality:
  - File upload component (drag-and-drop or browse)
  - Validation before import
  - Preview changes (show diff)
  - Confirm import dialog
  - Option to merge or replace existing config
- [ ] Example template download:
  - "Download Example Template" button
  - Include inline documentation in template
  - Provide multiple examples (basic, advanced, multi-device)

### 3.7 Real-time Value Display
- [ ] Implement WebSocket connection for live updates
- [ ] Update register/object values in table without refresh
- [ ] Add visual indicator when value changes (highlight animation)
- [ ] Show "stale data" warning if no update for N minutes
- [ ] Add manual refresh button

### 3.8 UI/UX Enhancements
- [ ] Add help tooltips explaining each field
- [ ] Implement form validation with clear error messages
- [ ] Add confirmation dialogs for destructive actions
- [ ] Show loading states during API calls
- [ ] Implement success/error notifications (toasts)
- [ ] Add keyboard shortcuts for common actions
- [ ] Make tables sortable and filterable
- [ ] Add pagination for large datasets
- [ ] Implement responsive design for mobile/tablet

---

## Phase 4: Real-time Updates & Integration (3-4 days)

### 4.1 MQTT Integration
- [ ] Subscribe to ChirpStack device uplink events
  - Topic: `application/+/device/+/event/up`
- [ ] Parse uplink messages and extract metrics
- [ ] Update Modbus register values based on mappings
- [ ] Update BACnet object values based on mappings
- [ ] Handle different payload formats (JSON, Protobuf, etc.)

### 4.2 Value Transformation & Scaling
- [ ] Implement scaling/transformation functions
  - Linear scaling (y = mx + b)
  - Unit conversion helpers
  - Rounding/precision control
- [ ] Add value clamping (min/max limits)
- [ ] Support for calculated fields (formulas)

### 4.3 Modbus Service Updates
- [ ] Modify `modbus_service.py` to read configuration from JSON
- [ ] Implement dynamic register updating from MQTT
- [ ] Add configuration reload without service restart
- [ ] Implement proper error handling and logging
- [ ] Add metrics/statistics endpoint (requests count, errors, etc.)

### 4.4 BACnet Service Updates
- [ ] Modify `bacnet_service.py` to read configuration from JSON
- [ ] Implement dynamic object updating from MQTT
- [ ] Add configuration reload without service restart
- [ ] Implement proper error handling and logging
- [ ] Add metrics/statistics endpoint

### 4.5 WebSocket Server for UI Updates
- [ ] Create WebSocket endpoint for real-time UI updates
- [ ] Broadcast value changes to connected clients
- [ ] Implement connection authentication
- [ ] Add heartbeat/keepalive mechanism
- [ ] Handle client disconnect/reconnect gracefully

---

## Phase 5: Testing & Documentation (2-3 days)

### 5.1 Testing
- [ ] Unit tests for API endpoints
- [ ] Integration tests for MQTT → Modbus/BACnet flow
- [ ] UI component tests
- [ ] End-to-end tests for complete workflows
- [ ] Load testing (multiple devices, high update rate)
- [ ] Test import/export with various file formats
- [ ] Test error scenarios and edge cases

### 5.2 Documentation
- [ ] User guide for Modbus configuration
- [ ] User guide for BACnet configuration
- [ ] API documentation (OpenAPI/Swagger)
- [ ] Configuration schema documentation
- [ ] Troubleshooting guide
- [ ] Example configurations for common use cases:
  - Temperature/humidity monitoring
  - Building automation (HVAC)
  - Industrial monitoring
  - Multi-building deployment

### 5.3 Example Templates
- [ ] Create comprehensive example Modbus configuration
- [ ] Create comprehensive example BACnet configuration
- [ ] Include inline comments explaining each field
- [ ] Provide migration guide from manual config

---

## Future Enhancements (Post-MVP)

### 6.1 Advanced Features
- [ ] Modbus RTU support (serial)
- [ ] BACnet MSTP support
- [ ] Historical data logging
- [ ] Alerting/notifications on value thresholds
- [ ] Multi-tenant support (isolated configs per tenant)
- [ ] Role-based access control for configuration
- [ ] Configuration templates/presets
- [ ] Batch operations (import multiple devices at once)

### 6.2 Monitoring & Analytics
- [ ] Dashboard with Modbus/BACnet statistics
- [ ] Request/response logging
- [ ] Performance metrics (latency, throughput)
- [ ] Error rate monitoring
- [ ] Client connection monitoring

### 6.3 Integration Features
- [ ] OPC UA gateway
- [ ] MQTT bridge (bidirectional)
- [ ] REST API proxy for Modbus/BACnet
- [ ] Integration with popular SCADA systems
- [ ] Cloud connector (AWS IoT, Azure IoT, etc.)

---

## Technical Notes

### Technology Stack
- **Backend**: Rust (ChirpStack core), Python (Modbus/BACnet services)
- **Frontend**: React, TypeScript, Ant Design
- **Communication**: gRPC, WebSocket, MQTT
- **Storage**: JSON files (configuration), PostgreSQL (device data)

### Key Design Decisions
1. **Configuration Storage**: Use JSON files for easy import/export and manual editing
2. **Real-time Updates**: MQTT subscription + WebSocket for UI updates
3. **Service Architecture**: Separate Python services for Modbus/BACnet (easier to maintain)
4. **API Design**: RESTful with clear CRUD operations
5. **UI Pattern**: Table-based listing with modal forms (consistent with ChirpStack UI)

### Performance Considerations
- Cache device metric schemas to reduce database queries
- Batch MQTT message processing to reduce CPU load
- Implement rate limiting on configuration changes
- Use WebSocket for UI updates instead of polling
- Consider using Redis for high-frequency value caching

### Security Considerations
- Validate all user inputs
- Implement proper authentication for service control endpoints
- Sanitize imported JSON files
- Rate limit API endpoints
- Audit log for configuration changes
- Secure WebSocket connections (WSS)

---

## Estimated Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Backend API | 5-7 days | None |
| Phase 2: Configuration Storage | 2-3 days | Phase 1 |
| Phase 3: Frontend UI | 7-10 days | Phase 1, 2 |
| Phase 4: Real-time Updates | 3-4 days | Phase 1, 2, 3 |
| Phase 5: Testing & Docs | 2-3 days | All phases |
| **Total** | **19-27 days** | |

**Note**: Timeline assumes dedicated development effort. Actual time may vary based on:
- Developer familiarity with ChirpStack codebase
- Complexity of device metric schemas
- Number of revisions based on user feedback
- Integration testing requirements

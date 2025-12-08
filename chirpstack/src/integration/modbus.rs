use std::collections::HashMap;

use anyhow::Result;
use async_trait::async_trait;
use tracing::{info, trace};

use super::Integration as IntegrationTrait;
use crate::storage::application::ModbusConfiguration;
use chirpstack_api::integration;

pub struct Integration {
    server_address: String,
    server_port: u32,
    unit_id: u32,
}

impl Integration {
    pub fn new(conf: &ModbusConfiguration) -> Integration {
        trace!("Initializing Modbus integration");

        Integration {
            server_address: conf.server_address.clone(),
            server_port: conf.server_port,
            unit_id: conf.unit_id,
        }
    }
}

#[async_trait]
impl IntegrationTrait for Integration {
    async fn uplink_event(
        &self,
        _vars: &HashMap<String, String>,
        pl: &integration::UplinkEvent,
    ) -> Result<()> {
        let di = pl.device_info.as_ref().unwrap();

        info!(
            dev_eui = %di.dev_eui,
            server = %format!("{}:{}", self.server_address, self.server_port),
            unit_id = %self.unit_id,
            "Modbus integration received uplink event"
        );

        Ok(())
    }

    async fn join_event(
        &self,
        _vars: &HashMap<String, String>,
        _pl: &integration::JoinEvent,
    ) -> Result<()> {
        Ok(())
    }

    async fn ack_event(
        &self,
        _vars: &HashMap<String, String>,
        _pl: &integration::AckEvent,
    ) -> Result<()> {
        Ok(())
    }

    async fn txack_event(
        &self,
        _vars: &HashMap<String, String>,
        _pl: &integration::TxAckEvent,
    ) -> Result<()> {
        Ok(())
    }

    async fn log_event(
        &self,
        _vars: &HashMap<String, String>,
        _pl: &integration::LogEvent,
    ) -> Result<()> {
        Ok(())
    }

    async fn status_event(
        &self,
        _vars: &HashMap<String, String>,
        pl: &integration::StatusEvent,
    ) -> Result<()> {
        let di = pl.device_info.as_ref().unwrap();

        info!(
            dev_eui = %di.dev_eui,
            server = %format!("{}:{}", self.server_address, self.server_port),
            unit_id = %self.unit_id,
            "Modbus integration received status event"
        );

        Ok(())
    }

    async fn location_event(
        &self,
        _vars: &HashMap<String, String>,
        _pl: &integration::LocationEvent,
    ) -> Result<()> {
        Ok(())
    }
}

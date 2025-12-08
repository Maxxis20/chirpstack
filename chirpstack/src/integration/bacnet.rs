use std::collections::HashMap;

use anyhow::Result;
use async_trait::async_trait;
use tracing::{info, trace};

use super::Integration as IntegrationTrait;
use crate::storage::application::BacnetConfiguration;
use chirpstack_api::integration;

pub struct Integration {
    device_id: u32,
    device_name: String,
    device_address: String,
    device_port: u32,
}

impl Integration {
    pub fn new(conf: &BacnetConfiguration) -> Integration {
        trace!("Initializing BACnet integration");

        Integration {
            device_id: conf.device_id,
            device_name: conf.device_name.clone(),
            device_address: conf.device_address.clone(),
            device_port: conf.device_port,
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
            device_id = %self.device_id,
            device_name = %self.device_name,
            server = %format!("{}:{}", self.device_address, self.device_port),
            "BACnet integration received uplink event"
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
            device_id = %self.device_id,
            device_name = %self.device_name,
            server = %format!("{}:{}", self.device_address, self.device_port),
            "BACnet integration received status event"
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

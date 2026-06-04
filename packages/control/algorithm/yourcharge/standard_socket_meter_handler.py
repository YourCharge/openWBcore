import logging
import time

from dataclasses import dataclass
from typing import Optional

from control import yourcharge
from modules.chargepoints.internal_openwb.config import InternalChargepointMode
from modules.common import modbus
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.sdm import Sdm120
from modules.internal_chargepoint_handler import clients

log = logging.getLogger(__name__)


@dataclass
class SocketMeterData:
    imported_wh: float = None
    exported_wh: float = None
    current: float = None
    voltage: float = None
    power: float = None
    power_factor: float = None
    serial: str = None
    model: str = None
    last_update: str = None


class SocketMeterHandler:
    def __init__(self, client: Optional[modbus.ModbusSerialClient]) -> None:
        self._modbus_id = 9
        self._fault_state = FaultState(component_info=ComponentInfo(self._modbus_id, "standard_socket_meter", "SDM120"))

        if client:
            log.warning("Using provided Modbus client for YC standard socket handler")
            self._client: modbus.ModbusSerialClient = client
        else:
            log.warning("creating own Modbus client for YC standard socket handler")
            self._client, _ = clients.get_modbus_client(InternalChargepointMode.SERIES, 0, None, self._fault_state)

        self._meter = Sdm120(modbus_id=self._modbus_id, client=self._client, fault_state=self._fault_state)
        self.data = SocketMeterData()

    def update(self):

        # NOTE: Standard socket is always assumed single-phase and hence we always take the first element
        # of 3-phase meter readings (currents, voltages, power-factors)
        counter_state = self._meter.get_counter_state()
        log.debug(f"standard-socket: counter_state: {counter_state}")

        self.data.imported_wh = counter_state.imported
        # log.debug(f"standard-socket: imported: {self.data.imported_wh}")

        self.data.current = counter_state.currents[0]
        # log.debug(f"standard-socket: currents: {self.data.current}")
        time.sleep(0.1)

        self.data.voltage = counter_state.voltages[0]
        # log.debug(f"standard-socket: voltages: {self.data.voltage}")
        time.sleep(0.1)

        self.data.power = counter_state.powers[0]
        # log.debug(f"standard-socket: power: {self.data.power}")
        time.sleep(0.1)

        self.data.power_factor = counter_state.power_factors[0]
        # log.debug(f"standard-socket: power_factors: {self.data.power_factor}")
        time.sleep(0.1)

        self.data.exported_wh = counter_state.exported
        # log.debug(f"standard-socket: exported: {self.data.exported_wh}")

        # frequency is currently not needed (it's sufficient to check it from EV meter)
        # self.data.frequency = self._meter.get_frequency()
        # log.warning(f"standard-socket: frequency: {self.data.frequency}")

        if self.data.serial is None:
            self.data.serial = counter_state.serial_number
            log.warning(f"standard-socket: serial: {self.data.serial}")

        if self.data.model is None:
            self.data.model = self._meter.get_model()
            log.warning(f"standard-socket: model: {self.data.model}")

        self.data.last_update = yourcharge.current_timestamp_factory()

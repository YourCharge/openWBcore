import logging
import re
from typing import TypedDict, Any

from modules.common.abstract_device import AbstractInverter
from modules.common.component_state import InverterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.simcount import SimCounter
from modules.common.store import get_inverter_value_store
from modules.devices.kostal.kostal_piko_old.config import KostalPikoOldInverterSetup

log = logging.getLogger(__name__)


class KwargsDict(TypedDict):
    device_id: int


class KostalPikoOldInverter(AbstractInverter):
    def __init__(self, component_config: KostalPikoOldInverterSetup, **kwargs: Any) -> None:
        self.component_config = component_config
        self.kwargs: KwargsDict = kwargs

    def initialize(self) -> None:
        self.__device_id: int = self.kwargs['device_id']
        self.sim_counter = SimCounter(self.__device_id, self.component_config.id, prefix="pv")
        self.store = get_inverter_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self, response: str) -> None:
        # power may be a string "xxx" when the inverter is offline, so we cannot match as a number
        # state is just for debugging currently known states:
        # - Aus
        # - Leerlauf
        result = re.search(
            r"aktuell</td>\s*<td[^>]*>\s*([^<]+).*"
            r"Gesamtenergie</td>\s*<td[^>]*>\s*(\d+).*"
            r"Status</td>\s*<td[^>]*>\s*([^<]+)",
            response,
            re.DOTALL
        )
        if result is None:
            raise Exception("Given HTML does not match the expected regular expression. Ignoring.")
        log.debug("Inverter data: state=%s, power=%s, exported=%s" %
                  (result.group(3), result.group(1), result.group(2)))
        try:
            power = -int(result.group(1))
        except ValueError:
            log.info("Inverter power is not a number! Inverter may be offline. Setting power to 0 W.")
            power = 0

        _, exported = self.sim_counter.sim_count(power)

        inverter_state = InverterState(
            exported=exported,
            power=power
        )
        self.store.set(inverter_state)


component_descriptor = ComponentDescriptor(configuration_factory=KostalPikoOldInverterSetup)

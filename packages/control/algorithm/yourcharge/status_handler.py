import logging

from typing import Dict, List
from control import yourcharge
from control.yourcharge import LmStatus
from helpermodules.pub import Pub


log = logging.getLogger(__name__)


class YcStatusHandler:
    def __init__(self) -> None:
        self._heartbeat_topic = f"{yourcharge.yc_status_topic}/heartbeat"
        self._lm_status_topic = f"{yourcharge.yc_status_topic}/lm_status"
        self._cp_enabled_status_topic = f"{yourcharge.yc_status_topic}/cp_enabled"
        self._cp_enabled_control_topic = f"{yourcharge.yc_control_topic}/cp_enabled"
        self._socket_approved_topic = f"{yourcharge.yc_status_topic}/socket_approved"
        self._status_dict: Dict[str, object] = {}
        self._changed_keys: List[str] = []

    def publish_changes(self):
        try:
            for changed_key in self._changed_keys:
                new_value = self._status_dict[changed_key]
                log.info(f"Publishing status update: {changed_key} = '{new_value}'")
                Pub().pub(changed_key, new_value)
        finally:
            self._changed_keys.clear()

    # heartbeat
    def update_heartbeat_ok(self, hearbeat: bool) -> None:
        self._update(self._heartbeat_topic, hearbeat)

    def get_heartbeat_ok(self) -> bool:
        self._get_status(self._heartbeat_topic)

    def has_changed_heartbeat(self) -> bool:
        return self._heartbeat_topic in self._changed_keys

    # lm status
    def update_lm_status(self, lm_status: LmStatus) -> None:
        self._update(self._lm_status_topic, lm_status)

    def get_lm_status(self) -> LmStatus:
        self._get_status(self._lm_status_topic)

    def has_changed_lm_status(self) -> bool:
        return self._lm_status_topic in self._changed_keys

    # CP enabled
    def update_cp_enabled(self, lm_status: LmStatus) -> None:
        self._update(self._cp_enabled_control_topic, lm_status)
        self._update(self._cp_enabled_status_topic, lm_status)

    def get_cp_enabled(self) -> LmStatus:
        self._get_status(self._cp_enabled_status_topic)

    def has_changed_cp_enabled(self) -> bool:
        return self._cp_enabled_status_topic in self._changed_keys

    # Socket approved
    def update_socket_approved(self, socket_approved: bool) -> None:
        self._update(self._socket_approved_topic, socket_approved)

    def get_socket_approved(self) -> bool:
        self._get_status(self._socket_approved_topic)

    def has_changed_socket_approved(self) -> bool:
        return self._socket_approved_topic in self._changed_keys

    # internal methods
    def _get_status(self, key: str):
        return self._status_dict.get(key)

    def _update(self, key: str, value: object):
        if not key in self._status_dict or value != self._status_dict[key]:
            self._changed_keys.append(key)
            log.info(f"Status change: {key} changed form '{self._status_dict.get(key)}' to '{value}'")
            self._status_dict[key] = value
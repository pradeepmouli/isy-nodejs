"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType[EventType["PropertyChanged"] = -1] = "PropertyChanged";
    EventType[EventType["Heartbeat"] = 0] = "Heartbeat";
    EventType[EventType["Trigger"] = 1] = "Trigger";
    EventType[EventType["DriverSpecific"] = 2] = "DriverSpecific";
    EventType[EventType["NodeChanged"] = 3] = "NodeChanged";
    EventType[EventType["SystemConfigChanged"] = 4] = "SystemConfigChanged";
    EventType[EventType["SystemStatusChanged"] = 5] = "SystemStatusChanged";
    EventType[EventType["InternetAccessChanged"] = 6] = "InternetAccessChanged";
    EventType[EventType["ProgressReport"] = 7] = "ProgressReport";
    EventType[EventType["SecuritySystem"] = 8] = "SecuritySystem";
    EventType[EventType["SystemAlert"] = 9] = "SystemAlert";
    EventType[EventType["OpenADR"] = 10] = "OpenADR";
    EventType[EventType["Climate"] = 11] = "Climate";
    EventType[EventType["APISEP"] = 12] = "APISEP";
    EventType[EventType["EnergyMonitoring"] = 13] = "EnergyMonitoring";
    EventType[EventType["UPBLinker"] = 14] = "UPBLinker";
    EventType[EventType["UPBDeviceAdder"] = 15] = "UPBDeviceAdder";
    EventType[EventType["UPBDeviceStatus"] = 16] = "UPBDeviceStatus";
    EventType[EventType["GasMeter"] = 17] = "GasMeter";
    EventType[EventType["ZigBee"] = 18] = "ZigBee";
    EventType[EventType["Elk"] = 19] = "Elk";
    EventType[EventType["DeviceLinker"] = 20] = "DeviceLinker";
    EventType[EventType["ZWave"] = 21] = "ZWave";
    EventType[EventType["Billing"] = 22] = "Billing";
    EventType[EventType["Portal"] = 23] = "Portal";
})(EventType || (exports.EventType = EventType = {}));
//# sourceMappingURL=EventType.js.map
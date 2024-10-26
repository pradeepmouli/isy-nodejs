"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drivers_js_1 = require("../../Definitions/Global/Drivers.js");
const ClusterMap_js_1 = require("../../Model/ClusterMap.js");
const OnOffLightDevice_1 = require("@project-chip/matter.js/devices/OnOffLightDevice");
//import InsteonMap from "./Insteon.json";
const DimmableLightDevice_1 = require("@project-chip/matter.js/devices/DimmableLightDevice");
const map = {
    Relay: {
        deviceType: OnOffLightDevice_1.OnOffLightDevice,
        mapping: {
            OnOff: {
                attributes: {
                    onOff: { driver: "ST" },
                },
                commands: { on: 'DON' },
            },
        }
    },
    RelaySwitch: {
        deviceType: OnOffLightDevice_1.OnOffLightDevice,
        mapping: {
            OnOff: {
                attributes: {
                    onOff: "ST",
                },
                commands: { on: "DON" },
            },
        },
    },
    Dimmer: {
        deviceType: DimmableLightDevice_1.DimmableLightDevice,
        mapping: {
            OnOff: {
                attributes: {
                    onOff: { driver: "ST" },
                },
                commands: { on: "DON" },
            },
            LevelControl: {
                attributes: {
                    currentLevel: { driver: Drivers_js_1.DriverType.Status },
                },
                commands: { moveToLevel: { command: 'DON' } },
            },
        },
    },
};
ClusterMap_js_1.MappingRegistry.register(map);
//# sourceMappingURL=Insteon.js.map
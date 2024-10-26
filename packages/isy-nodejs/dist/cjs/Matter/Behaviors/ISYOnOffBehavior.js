"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYDimmableBehavior = exports.ISYOnOffBehavior = void 0;
const InsteonRelayDevice_js_1 = require("../../Devices/Insteon/InsteonRelayDevice.js");
const OnOffLightDevice_1 = require("@project-chip/matter.js/devices/OnOffLightDevice");
const ISYClusterBehavior_js_1 = require("./ISYClusterBehavior.js");
const DimmableLightDevice_1 = require("@project-chip/matter.js/devices/DimmableLightDevice");
const InsteonDimmableDevice_js_1 = require("../../Devices/Insteon/InsteonDimmableDevice.js");
const Converters_js_1 = require("../../Converters.js");
class ISYOnOffBehavior extends (0, ISYClusterBehavior_js_1.ISYClusterBehavior)(OnOffLightDevice_1.OnOffLightRequirements.OnOffServer, InsteonRelayDevice_js_1.InsteonRelayDevice) {
    async initialize(_options) {
        await super.initialize(_options);
        //this.state.onOff = await this.device.state;
    }
    on = async () => {
        await super.on();
        //this.device.commands.DON = true;
    };
    async off() {
        //await super.off();
        // this.device.drivers = false;
    }
    toggle = async () => {
        //this.device.state = !(await this.device.state);
    };
    async handlePropertyChange({ driver, newValue, oldValue, formattedValue }) {
        if (driver === "ST") {
            this.state.onOff = newValue;
        }
        return super.handlePropertyChange({ driver, newValue, oldValue, formattedValue });
    }
}
exports.ISYOnOffBehavior = ISYOnOffBehavior;
class ISYDimmableBehavior extends (0, ISYClusterBehavior_js_1.ISYClusterBehavior)(DimmableLightDevice_1.DimmableLightRequirements.LevelControlServer, InsteonDimmableDevice_js_1.InsteonDimmableDevice) {
    async initialize(_options) {
        await super.initialize(_options);
        this.state.currentLevel = this.device.drivers.ST.value;
        //this.state.onLevel = this.device.drivers.OL;
    }
    setLevel(level) {
        level = Converters_js_1.Converters.Matter.LevelFrom0To255.LightingLevel.to(level);
        if (level > 0) {
            return this.device.sendCommand('DON', level);
        }
        else {
            return this.device.sendCommand('DOF');
        }
    }
}
exports.ISYDimmableBehavior = ISYDimmableBehavior;
//# sourceMappingURL=ISYOnOffBehavior.js.map
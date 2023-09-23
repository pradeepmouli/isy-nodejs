Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYScene = void 0;
const InsteonDimmableDevice_1 = require("./Devices/Insteon/InsteonDimmableDevice");
const ISY_1 = require("./ISY");
const ISYConstants_1 = require("./ISYConstants");
const ISYNode_1 = require("./ISYNode");
class ISYScene extends ISYNode_1.ISYNode {
    constructor(isy, scene) {
        var _a, _b;
        super(isy, scene);
        // this.logger(JSON.stringify(scene));
        this.typeCode = '';
        this.connectionType = 'Insteon Wired';
        this.batteryOperated = false;
        this.deviceFriendlyName = 'ISY Scene';
        this.members = [];
        this.isDimmable = false;
        if (Array.isArray((_a = scene.members) === null || _a === void 0 ? void 0 : _a.link)) {
            for (const node of scene.members.link) {
                if ('_' in node) {
                    // childDevices.push(node._);
                    // childDevices.push(object)
                    const s = node._;
                    const d = isy.getDevice(s);
                    if (d !== null && d !== undefined) {
                        d.addLink(this);
                    }
                    if (d instanceof InsteonDimmableDevice_1.InsteonDimmableDevice && node.type !== ISYConstants_1.LinkType.Controller) {
                        this.isDimmable = true;
                    }
                    this.members.push(d);
                }
            }
        }
        else if ((_b = scene.members) === null || _b === void 0 ? void 0 : _b.link) {
            if ('_' in scene.members.link) {
                const node = scene.members.link._;
                this.logger(JSON.stringify(node));
                // childDevices.push(node._);
                // childDevices.push(object)
                const s = scene.members.link._;
                const d = isy.getDevice(s);
                if (d) {
                    d.addLink(this);
                    // tslint:disable-next-line: triple-equals
                    if ((d.isDimmable && node.type != ISYConstants_1.LinkType.Controller) || this.isDimmable) {
                        this.isDimmable = true;
                    }
                    this.members.push(d);
                }
            }
        }
        // check dimmability this.dimmable = Array.apply(p => p.dimmable);
        this.recalculateState();
    }
    // Get the current light state
    get isOn() {
        for (const device of this.members) {
            if (device instanceof ISY_1.InsteonRelayDevice) {
                if (device.isOn) {
                    return true;
                }
            }
        }
        return false;
    }
    get brightnessLevel() {
        let lightDeviceCount = 0;
        let blevel = 0;
        for (const device of this.members) {
            if (device instanceof InsteonDimmableDevice_1.InsteonDimmableDevice) {
                lightDeviceCount++;
                blevel += device.brightnessLevel;
            }
            else if (device instanceof ISY_1.InsteonRelayDevice) {
                lightDeviceCount++;
                blevel += device.isOn ? 100 : 0;
            }
        }
        if (lightDeviceCount > 0) {
            return Math.floor(blevel / lightDeviceCount);
        }
        else {
            return 0;
        }
    }
    // Current light dim state is always calculated
    recalculateState() {
        this.markAsChanged();
        return true;
    }
    markAsChanged() {
        this.lastChanged = new Date();
        this.emit('PropertyChanged', 'isOn', this.isOn, this.isOn, this.isOn ? 'on' : 'off');
        if (this.isDimmable) {
            this.emit('PropertyChanged', 'brightnesslevel', this.brightnessLevel, this.brightnessLevel, this.brightnessLevel + '%');
        }
    }
    async updateIsOn(lightState) {
        return this.isy.sendNodeCommand(this, lightState ? ISYConstants_1.Commands.On : ISYConstants_1.Commands.Off);
    }
    async updateBrightnessLevel(level) {
        return this.isy.sendNodeCommand(this, level > 0 ? ISYConstants_1.Commands.On : ISYConstants_1.Commands.Off, level);
    }
    getAreAllLightsInSpecifiedState(state) {
        for (const device of this.members) {
            if (device instanceof ISY_1.InsteonRelayDevice) {
                if (device.isOn !== state) {
                    return false;
                }
            }
        }
        return true;
    }
}
exports.ISYScene = ISYScene;

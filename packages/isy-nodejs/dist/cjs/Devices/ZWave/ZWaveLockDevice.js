"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZwaveLockDevice = void 0;
const ISYConstants_js_1 = require("../../ISYConstants.js");
const ZWaveBaseDevice_js_1 = require("./ZWaveBaseDevice.js");
require("winston");
class ZwaveLockDevice extends ZWaveBaseDevice_js_1.ZWaveBaseDevice {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
    sendLockCommand(lockState, resultHandler) {
        this.sendNonSecureLockCommand(lockState);
        this.sendSecureLockCommand(lockState);
    }
    get isLocked() {
        return this.drivers.ST.value > 0;
    }
    async updateIsLocked(isLocked) {
        //return super.updateState(isLocked);
    }
    async sendNonSecureLockCommand(lockState) {
        if (lockState) {
            return this.isy.sendNodeCommand(this, ISYConstants_js_1.Commands.Lock.Lock);
        }
        else {
            return this.isy.sendNodeCommand(this, ISYConstants_js_1.Commands.Lock.Unlock);
        }
    }
    async sendSecureLockCommand(lockState) {
        if (lockState) {
            return this.isy.sendNodeCommand(this, ISYConstants_js_1.Commands.On, ISYConstants_js_1.States.SecureLock.Secured);
        }
        else {
            return this.isy.sendNodeCommand(this, ISYConstants_js_1.Commands.On, ISYConstants_js_1.States.SecureLock.NotSecured);
        }
    }
}
exports.ZwaveLockDevice = ZwaveLockDevice;
//# sourceMappingURL=ZWaveLockDevice.js.map
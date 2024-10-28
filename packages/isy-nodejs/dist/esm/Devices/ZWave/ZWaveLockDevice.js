import { Commands, States } from '../../ISYConstants.js';
import { ZWaveBaseDevice } from './ZWaveBaseDevice.js';
import 'winston';
export class ZwaveLockDevice extends ZWaveBaseDevice {
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
            return this.isy.sendNodeCommand(this, Commands.Lock.Lock);
        }
        else {
            return this.isy.sendNodeCommand(this, Commands.Lock.Unlock);
        }
    }
    async sendSecureLockCommand(lockState) {
        if (lockState) {
            return this.isy.sendNodeCommand(this, Commands.On, States.SecureLock.Secured);
        }
        else {
            return this.isy.sendNodeCommand(this, Commands.On, States.SecureLock.NotSecured);
        }
    }
}
//# sourceMappingURL=ZWaveLockDevice.js.map
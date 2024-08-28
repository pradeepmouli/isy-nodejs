import { Family } from '../../Definitions/Global/Families.js';
import { byteToDegree, byteToPct, pctToByte } from '../../Utils.js';
import { ISYDeviceNode } from '../ISYDeviceNode.js';
import 'winston';
// import { InsteonNLS } from './insteonfam'
export class ZWaveBaseDevice extends ISYDeviceNode {
    async getNodeDef() {
        return this.isy.sendRequest(`zmatter/zwave/node/${this.address}/def/get?full=true`);
    }
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
        this.family = Family.ZWave;
        //// this.productName = InsteonNLS.getDeviceDescription(String.fromCharCode(category,device,version));
    }
    convertFrom(value, uom) {
        switch (uom) {
            case 101:
                return byteToDegree(value);
            case 100:
                return byteToPct(value);
            case 17:
                return value / 10;
            default:
                return super.convertFrom(value, uom);
        }
    }
    convertTo(value, uom) {
        const nuom = super.convertTo(value, uom);
        switch (uom) {
            case 101:
                return nuom * 2;
            case 100:
                return pctToByte(nuom);
            case 17:
                return Math.round(value * 10);
            default:
                return nuom;
        }
    }
    async sendBeep(level = 100) {
        return this.sendCommand;
    }
}
//# sourceMappingURL=ZWaveBaseDevice.js.map
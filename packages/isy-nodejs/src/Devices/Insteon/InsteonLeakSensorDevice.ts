import type { NodeInfo } from '../../Model/NodeInfo.js';
import { ISY } from '../../ISY.js';
import { ISYBinaryStateDevice } from '../ISYDevice.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
import 'winston';

export class InsteonLeakSensorDevice extends InsteonBaseDevice {
	constructor (isy: ISY, deviceNode: NodeInfo) {
		super(isy, deviceNode);
	}


	get isDry() {
		return this.drivers.ST;
	}
}
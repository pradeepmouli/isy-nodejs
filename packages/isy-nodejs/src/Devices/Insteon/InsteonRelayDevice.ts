import { Family, ISY } from '../../ISY.js';

import { NodeInfo } from '../../Model/NodeInfo.js';
import { EndpointFor } from '../EndpointFor.js';
import { MapsTo } from '../MapsTo.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';

import type { OnOffBehavior } from '@project-chip/matter.js/behaviors/on-off';
import 'winston';
import { RelayLampSwitch } from './RelayLampSwitch.js';
import type { Command } from '../../Definitions/Global/Commands.js';
import { Driver, DriverType } from '../../Definitions/Global/Drivers.js';
import { UnitOfMeasure } from '../../Definitions/index.js';
import { Properties } from '../../ISYConstants.js';

import type { DriverState } from '../../Model/DriverState.js';

export class InsteonRelayDevice extends RelayLampSwitch.Node /*InsteonBaseDevice<Driver.Signatures<'ST' | 'OL' | 'RR' | 'ERR'>, Command.Signatures<'DON' | 'DOF'>>*/ {
	// #region Constructors (1)

	constructor(isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
	}

	// #endregion Constructors (1)

	// #region Public Methods (2)

	public async initialize(endpoint: EndpointFor<typeof OnOffBehavior>): Promise<void> {
		/*endpoint.events.onOff.onOff$Changed.on((value) => {
			this.commands.DON(value);
			this.drivers.ST;
		});
		//endpoint.defaults.onOff.onOff = await this.isOn;
		endpoint.set({ onOff: { onOff: (await this.drivers.ST.value) > 0 } });
		const that = this;

		this.events.on('StatusChanged', (propertyName, newValue, _oldValue, formattedValue) => {
			if (propertyName === 'ST') {
				endpoint.set({ onOff: { onOff: newValue > 0 } });
				//endpoint.setSt onOff: newValue });
			}
		});*/
	}

	/*
	public async updateIsOn(isOn: boolean): Promise<any> {
		if (t !== isOn) {
			this.isOn = true;
			return super.updateState(isOn);
		}
		else {
			return Promise.resolve();
		}

	} */
	public override async sendBeep(level: number = 100): Promise<any> {
		return super.beep(level);
	}

	// #endregion Public Methods (2)
}

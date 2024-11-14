import { Family } from '../../Definitions/Global/Families.js';
import { ISY } from '../../ISY.js';
import { ISYDeviceNode } from '../ISYDeviceNode.js';
import { AlarmSensorPhysicalState, AlarmSensorLogicalState } from './ElkAlarmPanelDevice.js';
/////////////////////////////
// ELKAlarmSensor
//
export class ElkAlarmSensorDevice extends ISYDeviceNode<Family.Global, any, any> {
	[x: string]: any;
	public area: number;
	public zone: string;
	public deviceFriendlyName: string;
	public deviceType: any;
	public connectionType: string;
	public batteryOperated: boolean;
	public physicalState: AlarmSensorPhysicalState;
	public logicalState: AlarmSensorLogicalState;
	public voltage: number;
	constructor(isy: ISY, name: string, area: number, zone: string) {
		super(isy, {
			family: Family.Global,
			name,
			address: `ElkZone_${zone}`,
			enabled: true,
			pnode: undefined,
			startDelay: 0,
			hint: '',
			endDelay: 0,
			wattage: 0,
			dcPeriod: 0
		});
		this.area = area;
		this.zone = zone;
		// this.name = name;
		// this.address = "ElkZone" + zone;
		this.label = `Elk Connected Sensor ${zone}`;
		this.deviceFriendlyName = `Elk Connected Sensor ${zone}`;
		this.connectionType = 'Elk Network';
		this.batteryOperated = false;
		this.physicalState = AlarmSensorPhysicalState.NOT_CONFIGURED;
		this.logicalState = AlarmSensorLogicalState.NORMAL;
		this.lastChanged = new Date();
	}
	public override async sendCommand(command: string): Promise<any> {
		return this.isy.sendISYCommand(`elk/zone/${this.zone}/cmd/${command}`);
	}
	public async sendBypassToggleCommand() {
		return this.sendCommand(`toggle/bypass`);
	}
	public getPhysicalState() {
		return this.physicalState;
	}
	public isBypassed() {
		return this.logicalState === 3;
	}
	public getLogicalState() {
		return this.logicalState;
	}
	public getCurrentDoorWindowState() {
		return this.physicalState === this.SENSOR_STATE_PHYSICAL_OPEN || this.logicalState === this.SENSOR_STATE_LOGICAL_VIOLATED;
	}
	public getSensorStatus() {
		return 'PS [' + this.physicalState + '] LS [' + this.logicatState + ']';
	}
	public isPresent() {
		if (this.voltage < 65 || this.voltage > 80) {
			return true;
		} else {
			return false;
		}
	}
	public override handleEvent(event: { control?: string; data?: any; node?: any; eventInfo?: any }) {
		const zoneUpdate = event.eventInfo.ze;
		const zone = zoneUpdate.attr.zone;
		const updateType = zoneUpdate.attr.type;
		const valueToSet = zoneUpdate.attr.val;
		let valueChanged = false;
		if (zone === this.zone) {
			if (updateType === 51) {
				if (this.logicalState !== valueToSet) {
					const temp = this.logicalState;
					this.logicalState = valueToSet;
					this.emit('propertyChanged', 'logicalState', this.logicalState, temp, this.voltage.toString());
					// Not triggering change update on logical state because physical always follows and don't want double notify.
					// valueChanged = true;
				}
			} else if (updateType === 52) {
				if (this.physicalState !== valueToSet) {
					const temp = this.physicalState;
					this.physicalState = valueToSet;
					this.emit('propertyChanged', 'physicalState', this.physicalState, temp, this.voltage.toString());
					valueChanged = true;
				}
			} else if (updateType === 53) {
				if (this.voltage !== valueToSet) {
					const temp = this.voltage;
					this.voltage = valueToSet;
					this.emit('propertyChanged', 'voltage', this.voltage, temp, this.voltage.toString());
					valueChanged = true;
				}
			}
		}
		if (valueChanged) {
			this.lastChanged = new Date();
		}
		return valueChanged;
	}
}

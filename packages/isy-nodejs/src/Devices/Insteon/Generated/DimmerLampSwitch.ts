/* THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT DIRECTLY. */

import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { Family } from "../../../Definitions/Global/Families.js";
import type { NodeInfo } from "../../../Model/NodeInfo.js";
import type { ISY } from "../../../ISY.js";
import type { ISYNode } from "../../../ISYNode.js";
import { Base } from "../index.js";
import { ISYDeviceNode } from "../../ISYDeviceNode.js";
import { Driver } from "../../../Definitions/Global/Drivers.js";
import { Insteon } from "../../../Definitions/index.js";
import type { DriverState } from "../../../Model/DriverState.js";
import { NodeFactory } from "../../NodeFactory.js";
import { validateHeaderName } from 'http';

export const nodeDefId = "DimmerLampSwitch";

type Commands = DimmerLampSwitch.Commands;
type Drivers = DimmerLampSwitch.Drivers;

export class DimmerLampSwitchNode extends Base<Drivers, Commands> implements DimmerLampSwitch.Interface {
	public readonly commands = {
		DON: this.on,
		DOF: this.off,
		DFOF: this.fastOff,
		DFON: this.fastOn,
		BRT: this.brighten,
		DIM: this.dim,
		FDUP: this.fadeUp,
		FDDOWN: this.fadeDown,
		FDSTOP: this.fadeStop,
		QUERY: this.query,
		BEEP: this.beep,
		OL: this.updateOnLevel,
		RR: this.updateRampRate,
		BL: this.backlight,
		WDU: this.writeChanges
	};
	static nodeDefId = "DimmerLampSwitch";
	declare readonly nodeDefId: "DimmerLampSwitch";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Percent, label: "Status", name: "status" });
		this.drivers.OL = Driver.create("OL", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Percent, label: "On Level", name: "onLevel" });
		this.drivers.RR = Driver.create("RR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Ramp Rate", name: "rampRate" });
		this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
	}
	async on(value?: number) {
		return this.sendCommand("DON", { value: value });
	}
	async off() {
		return this.sendCommand("DOF");
	}
	async fastOff() {
		return this.sendCommand("DFOF");
	}
	async fastOn() {
		return this.sendCommand("DFON");
	}
	async brighten() {
		return this.sendCommand("BRT");
	}
	async dim() {
		return this.sendCommand("DIM");
	}
	async fadeUp() {
		return this.sendCommand("FDUP");
	}
	async fadeDown() {
		return this.sendCommand("FDDOWN");
	}
	async fadeStop() {
		return this.sendCommand("FDSTOP");
	}
	async query() {
		return this.sendCommand("QUERY");
	}
	async beep(value?: number) {
		return this.sendCommand("BEEP", { value: value });
	}
	async updateOnLevel(value: number) {
		return this.sendCommand("OL", { value: value });
	}
	async updateRampRate(value: number) {
		return this.sendCommand("RR", { value: value });
	}
	async backlight(value: number) {
		return this.sendCommand("BL", { value: value });
	}
	async writeChanges() {
		return this.sendCommand("WDU");
	}
	public get status(): number {
		return this.drivers.ST?.value;
	}
	public get onLevel(): number {
		return this.drivers.OL?.value;
	}
	public get rampRate(): number {
		return this.drivers.RR?.value;
	}
	public get responding(): Insteon.Error {
		return this.drivers.ERR?.value;
	}
}

NodeFactory.register(DimmerLampSwitchNode);

export namespace DimmerLampSwitch {
	export interface Interface extends Omit<InstanceType<typeof DimmerLampSwitchNode>, keyof ISYDeviceNode<any, any, any, any>> {
		nodeDefId: "DimmerLampSwitch";
	}
	export function is(node: ISYNode<any, any, any, any>): node is DimmerLampSwitchNode {
		return node.nodeDefId === nodeDefId;
	}
	export function create(isy: ISY, nodeInfo: NodeInfo) {
		return new DimmerLampSwitchNode(isy, nodeInfo);
	}
	export const Node = DimmerLampSwitchNode;
	export type Commands = {
		DON: ((value?: number) => Promise<boolean>) & {
			label: "On";
			name: "on";
		};
		DOF: (() => Promise<boolean>) & {
			label: "Off";
			name: "off";
		};
		DFOF: (() => Promise<boolean>) & {
			label: "Fast Off";
			name: "fastOff";
		};
		DFON: (() => Promise<boolean>) & {
			label: "Fast On";
			name: "fastOn";
		};
		BRT: (() => Promise<boolean>) & {
			label: "Brighten";
			name: "brighten";
		};
		DIM: (() => Promise<boolean>) & {
			label: "Dim";
			name: "dim";
		};
		FDUP: (() => Promise<boolean>) & {
			label: "Fade Up";
			name: "fadeUp";
		};
		FDDOWN: (() => Promise<boolean>) & {
			label: "Fade Down";
			name: "fadeDown";
		};
		FDSTOP: (() => Promise<boolean>) & {
			label: "Fade Stop";
			name: "fadeStop";
		};
		QUERY: (() => Promise<boolean>) & {
			label: "Query";
			name: "query";
		};
		BEEP: ((value?: number) => Promise<boolean>) & {
			label: "Beep";
			name: "beep";
		};
		OL: ((value: number) => Promise<boolean>) & {
			label: "On Level";
			name: "updateOnLevel";
		};
		RR: ((value: number) => Promise<boolean>) & {
			label: "Ramp Rate";
			name: "updateRampRate";
		};
		BL: ((value: number) => Promise<boolean>) & {
			label: "Backlight";
			name: "backlight";
		};
		WDU: (() => Promise<boolean>) & {
			label: "Write Changes";
			name: "writeChanges";
		};
	};
	export type Drivers = {
		ST: {
			uom: UnitOfMeasure.Percent;
			value: number;
			label: "Status";
			name: "status";
		};
		OL: {
			uom: UnitOfMeasure.Percent;
			value: number;
			label: "On Level";
			name: "onLevel";
		};
		RR: {
			uom: UnitOfMeasure.Index;
			value: number;
			label: "Ramp Rate";
			name: "rampRate";
		};
		ERR: {
			uom: UnitOfMeasure.Index;
			value: Insteon.Error;
			label: "Responding";
			name: "responding";
		};
	};
}

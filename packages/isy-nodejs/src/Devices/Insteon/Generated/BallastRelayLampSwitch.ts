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

export const nodeDefId = "BallastRelayLampSwitch";

type Commands = BallastRelayLampSwitch.Commands;
type Drivers = BallastRelayLampSwitch.Drivers;

export class BallastRelayLampSwitchNode extends Base<Drivers, Commands> implements BallastRelayLampSwitch.Interface {
	public readonly commands = {
		DON: this.on,
		DOF: this.off,
		DFOF: this.fastOff,
		DFON: this.fastOn,
		QUERY: this.query,
		BEEP: this.beep,
		WDU: this.writeChanges
	};
	static nodeDefId = "BallastRelayLampSwitch";
	declare readonly nodeDefId: "BallastRelayLampSwitch";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Percent, label: "Status", name: "status" });
		this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
	}
	async on(value?: (0 | 100)) {
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
	async query() {
		return this.sendCommand("QUERY");
	}
	async beep(value?: number) {
		return this.sendCommand("BEEP", { value: value });
	}
	async writeChanges() {
		return this.sendCommand("WDU");
	}
	public get status(): Insteon.Sml {
		return this.drivers.ST?.value;
	}
	public get responding(): Insteon.Error {
		return this.drivers.ERR?.value;
	}
}

NodeFactory.register(BallastRelayLampSwitchNode);

export namespace BallastRelayLampSwitch {
	export interface Interface extends Omit<InstanceType<typeof BallastRelayLampSwitchNode>, keyof ISYDeviceNode<any, any, any, any>> {
		nodeDefId: "BallastRelayLampSwitch";
	}
	export function is(node: ISYNode<any, any, any, any>): node is BallastRelayLampSwitchNode {
		return node.nodeDefId === nodeDefId;
	}
	export function create(isy: ISY, nodeInfo: NodeInfo) {
		return new BallastRelayLampSwitchNode(isy, nodeInfo);
	}
	export const Node = BallastRelayLampSwitchNode;
	export type Commands = {
		DON: ((value?: (0 | 100)) => Promise<boolean>) & {
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
		QUERY: (() => Promise<boolean>) & {
			label: "Query";
			name: "query";
		};
		BEEP: ((value?: number) => Promise<boolean>) & {
			label: "Beep";
			name: "beep";
		};
		WDU: (() => Promise<boolean>) & {
			label: "Write Changes";
			name: "writeChanges";
		};
	};
	export type Drivers = {
		ST: {
			uom: UnitOfMeasure.Percent;
			value: Insteon.Sml;
			label: "Status";
			name: "status";
		};
		ERR: {
			uom: UnitOfMeasure.Index;
			value: Insteon.Error;
			label: "Responding";
			name: "responding";
		};
	};
}

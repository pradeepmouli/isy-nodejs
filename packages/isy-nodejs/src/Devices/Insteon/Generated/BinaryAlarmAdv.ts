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

export const nodeDefId = "BinaryAlarm_ADV";

type Commands = BinaryAlarmAdv.Commands;
type Drivers = BinaryAlarmAdv.Drivers;

export class BinaryAlarmAdvNode extends Base<Drivers, Commands> implements BinaryAlarmAdv.Interface {
	public readonly commands = {
		QUERY: this.query,
		BEEP: this.beep,
		WDU: this.writeChanges
	};
	static nodeDefId = "BinaryAlarm_ADV";
	declare readonly nodeDefId: "BinaryAlarm_ADV";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Percent, label: "Status", name: "status" });
		this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
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
	public get status(): Insteon.OnLevelRelay {
		return this.drivers.ST?.value;
	}
	public get responding(): Insteon.Error {
		return this.drivers.ERR?.value;
	}
}

NodeFactory.register(BinaryAlarmAdvNode);

export namespace BinaryAlarmAdv {
	export interface Interface extends Omit<InstanceType<typeof BinaryAlarmAdvNode>, keyof ISYDeviceNode<any, any, any, any>> {
		nodeDefId: "BinaryAlarm_ADV";
	}
	export function is(node: ISYNode<any, any, any, any>): node is BinaryAlarmAdvNode {
		return node.nodeDefId === nodeDefId;
	}
	export function create(isy: ISY, nodeInfo: NodeInfo) {
		return new BinaryAlarmAdvNode(isy, nodeInfo);
	}
	export const Node = BinaryAlarmAdvNode;
	export type Commands = {
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
			value: Insteon.OnLevelRelay;
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

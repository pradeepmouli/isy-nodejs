/* THIS FILE WAS AUTOMATICALLY GENERATED. DO NOT EDIT DIRECTLY. */

import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { Family } from "../../../Definitions/Global/Families.js";
import type { NodeInfo } from "../../../Model/NodeInfo.js";
import type { ISY } from "../../../ISY.js";
import type { ISYNode } from "../../../ISYNode.js";
import { Base } from "../index.js";
import { ISYDeviceNode } from "../../ISYDeviceNode.js";
import { Driver } from "../../../Definitions/Global/Drivers.js";
import { Poly } from "../../../Definitions/index.js";
import type { DriverState } from "../../../Model/DriverState.js";
import { NodeFactory } from "../../NodeFactory.js";

export const nodeDefId = "GENERIC";

type Commands = GenericDevice.Commands;
type Drivers = GenericDevice.Drivers;

export class GenericDeviceNode extends Base<Drivers, Commands> implements GenericDevice.Interface {
	public readonly commands = {
		DON: this.on,
		DOF: this.off
	};
	static nodeDefId = "GENERIC";
	declare readonly nodeDefId: "GENERIC";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.OffOn, label: "Status", name: "status" });
	}
	async on() {
		return this.sendCommand("DON");
	}
	async off() {
		return this.sendCommand("DOF");
	}
	public get status(): (0 | 100 | 101) {
		return this.drivers.ST?.value;
	}
}

NodeFactory.register(GenericDeviceNode);

export namespace GenericDevice {
	export interface Interface extends Omit<InstanceType<typeof GenericDeviceNode>, keyof ISYDeviceNode<any, any, any, any>> {
		nodeDefId: "GENERIC";
	}
	export function is(node: ISYNode<any, any, any, any>): node is GenericDeviceNode {
		return node.nodeDefId === nodeDefId;
	}
	export function create(isy: ISY, nodeInfo: NodeInfo) {
		return new GenericDeviceNode(isy, nodeInfo);
	}
	export const Node = GenericDeviceNode;
	export type Commands = {
		DON: (() => Promise<boolean>) & {
			label: "On";
			name: "on";
		};
		DOF: (() => Promise<boolean>) & {
			label: "Off";
			name: "off";
		};
	};
	export type Drivers = {
		ST: {
			uom: UnitOfMeasure.OffOn;
			value: (0 | 100 | 101);
			label: "Status";
			name: "status";
		};
	};
}

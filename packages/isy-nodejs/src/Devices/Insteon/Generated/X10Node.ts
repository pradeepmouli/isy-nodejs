/*THIS FILE WAS GENERATED BY A SCRIPT. DO NOT EDIT DIRECTLY.*/

import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { Family } from "../../../Definitions/Global/Families.js";
import type { NodeInfo } from "../../../Model/NodeInfo.js";
import type { ISY } from "../../../ISY.js";
import { Base } from "../index.js";
import { Driver } from "../../../Definitions/Global/Drivers.js";
import { Insteon } from "../../../Definitions/index.js";
import type { DriverState } from "../../../Model/DriverState.js";
import { NodeFactory } from "../../NodeFactory.js";

export const nodeDefId = "X10";

type Commands = X10Node.Commands;
type Drivers = X10Node.Drivers;

export class X10Node extends Base<Drivers, Commands> {
	public readonly commands = {
		DON: this.on,
		DOF: this.off,
		BRT: this.brighten,
		DIM: this.dim,
		QUERY: this.query
	};
	static nodeDefId = "X10";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Percent, label: "Status", name: "status" });
		this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
	}
	async on() {
		return this.sendCommand("DON");
	}
	async off() {
		return this.sendCommand("DOF");
	}
	async brighten() {
		return this.sendCommand("BRT");
	}
	async dim() {
		return this.sendCommand("DIM");
	}
	async query() {
		return this.sendCommand("QUERY");
	}
	public get status(): Insteon.OnLevelRelay {
		return this.drivers.ST?.value;
	}
	public get responding(): Insteon.Error {
		return this.drivers.ERR?.value;
	}
}

NodeFactory.register(X10Node);

export namespace X10Node {
	export type Commands = {
		DON: (() => Promise<boolean>) & {
			label: "On";
			name: "on";
		};
		DOF: (() => Promise<boolean>) & {
			label: "Off";
			name: "off";
		};
		BRT: (() => Promise<boolean>) & {
			label: "Brighten";
			name: "brighten";
		};
		DIM: (() => Promise<boolean>) & {
			label: "Dim";
			name: "dim";
		};
		QUERY: (() => Promise<boolean>) & {
			label: "Query";
			name: "query";
		};
	};
	export type Drivers = {
		ST?: {
			uom: UnitOfMeasure.Percent;
			value: Insteon.OnLevelRelay;
			label: "Status";
			name: "status";
		};
		ERR?: {
			uom: UnitOfMeasure.Index;
			value: Insteon.Error;
			label: "Responding";
			name: "responding";
		};
	};
}
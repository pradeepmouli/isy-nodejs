/*THIS FILE WAS GENERATED BY A SCRIPT. DO NOT EDIT DIRECTLY.*/

import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { Family } from "../../../Definitions/Global/Families.js";
import type { NodeInfo } from "../../../Model/NodeInfo.js";
import type { ISY } from "../../../ISY.js";
import { Base } from "../index.js";
import { Driver } from "../../../Definitions/Global/Drivers.js";
import { UDI } from "../../../Definitions/index.js";
import type { DriverState } from "../../../Model/DriverState.js";
import { NodeFactory } from "../../NodeFactory.js";

export const nodeDefId = "EM3PulseCounter";

type Commands = PulseCounterNode.Commands;
type Drivers = PulseCounterNode.Drivers;

export class PulseCounterNode extends Base<Drivers, Commands> {
	public readonly commands = {};
	static nodeDefId = "EM3PulseCounter";
	constructor (isy: ISY, nodeInfo: NodeInfo) {
		super(isy, nodeInfo);
		this.drivers.ST = Driver.create("ST", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.PulseCount, label: "Status", name: "status" });
		this.drivers.CPW = Driver.create("CPW", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Watt, label: "Current Power", name: "currentPower" });
		this.drivers.TPW = Driver.create("TPW", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.KilowattsPerHour, label: "Total Energy", name: "totalEnergy" });
		this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property as DriverState, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
	}
	public get status(): number {
		return this.drivers.ST?.value;
	}
	public get currentPower(): number {
		return this.drivers.CPW?.value;
	}
	public get totalEnergy(): number {
		return this.drivers.TPW?.value;
	}
	public get responding(): UDI.Error {
		return this.drivers.ERR?.value;
	}
}

NodeFactory.register(PulseCounterNode);

export namespace PulseCounterNode {
	export type Commands = {};
	export type Drivers = {
		ST?: {
			uom: UnitOfMeasure.PulseCount;
			value: number;
			label: "Status";
			name: "status";
		};
		CPW?: {
			uom: UnitOfMeasure.Watt;
			value: number;
			label: "Current Power";
			name: "currentPower";
		};
		TPW?: {
			uom: UnitOfMeasure.KilowattsPerHour;
			value: number;
			label: "Total Energy";
			name: "totalEnergy";
		};
		ERR?: {
			uom: UnitOfMeasure.Index;
			value: UDI.Error;
			label: "Responding";
			name: "responding";
		};
	};
}

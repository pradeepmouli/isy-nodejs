import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { Family } from "../../../Definitions/Global/Families.js";
import type { NodeInfo } from "../../../Model/NodeInfo.js";
import type { ISY } from "../../../ISY.js";
import { ISYDeviceNode } from "../../../ISYNode.js";
import { Brultech } from "../../../Definitions/index.js";
export declare const nodeDefId = "BTChannel";
type Commands = {};
type Drivers = {
    ST?: {
        uom: UnitOfMeasure.Watt;
        value: number;
    };
    TPW?: {
        uom: UnitOfMeasure.KilowattsPerHour;
        value: number;
    };
    ERR?: {
        uom: UnitOfMeasure.Index;
        value: Brultech.Error;
    };
};
export declare class EnergyMonitorNode extends ISYDeviceNode<Family.Brultech, keyof Drivers, keyof Commands> {
    readonly commands: Commands;
    drivers: Drivers;
    static nodeDefId: string;
    constructor(isy: ISY, nodeInfo: NodeInfo);
    get currentPower(): number;
    get totalEnergy(): number;
    get responding(): Brultech.Error;
}
export {};
//# sourceMappingURL=EnergyMonitorNode.d.ts.map
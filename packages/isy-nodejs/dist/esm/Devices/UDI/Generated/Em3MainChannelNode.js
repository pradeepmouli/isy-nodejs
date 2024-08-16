import { UnitOfMeasure } from "../../../Definitions/Global/UOM.js";
import { ISYDeviceNode } from "../../../ISYNode.js";
import { Driver } from "../../../Definitions/Global/Drivers.js";
export const nodeDefId = "EM3MainChannel";
export class Em3MainChannelNode extends ISYDeviceNode {
    commands = {};
    drivers = {};
    static nodeDefId = "EM3MainChannel";
    constructor(isy, nodeInfo) {
        super(isy, nodeInfo);
        this.drivers.ST = Driver.create("ST", this, nodeInfo.property, { uom: UnitOfMeasure.Watt, label: "Status", name: "status" });
        this.drivers.TPW = Driver.create("TPW", this, nodeInfo.property, { uom: UnitOfMeasure.KilowattsPerHour, label: "Total Energy", name: "totalEnergy" });
        this.drivers.CV = Driver.create("CV", this, nodeInfo.property, { uom: UnitOfMeasure.Volt, label: "Current Voltage", name: "currentVoltage" });
        this.drivers.CC = Driver.create("CC", this, nodeInfo.property, { uom: UnitOfMeasure.Ampere, label: "Current Current", name: "currentCurrent" });
        this.drivers.PF = Driver.create("PF", this, nodeInfo.property, { uom: UnitOfMeasure.PowerFactor, label: "Power Factor", name: "powerFactor" });
        this.drivers.ERR = Driver.create("ERR", this, nodeInfo.property, { uom: UnitOfMeasure.Index, label: "Responding", name: "responding" });
    }
    get status() {
        return this.drivers.ST?.value;
    }
    get totalEnergy() {
        return this.drivers.TPW?.value;
    }
    get currentVoltage() {
        return this.drivers.CV?.value;
    }
    get currentCurrent() {
        return this.drivers.CC?.value;
    }
    get powerFactor() {
        return this.drivers.PF?.value;
    }
    get responding() {
        return this.drivers.ERR?.value;
    }
}
//# sourceMappingURL=Em3MainChannelNode.js.map
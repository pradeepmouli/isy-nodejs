import { Family } from '../../Definitions/Global/Families.js';
import { ISY } from '../../ISY.js';
import { UnitOfMeasure } from '../../Definitions/Global/UOM.js';
import { NodeInfo } from '../../Model/NodeInfo.js';
import { ISYDeviceNode } from '../ISYDeviceNode.js';
import { ISYNode } from '../../ISYNode.js';
import 'winston';
import type { Merge } from '@project-chip/matter.js/util';
export declare class InsteonBaseDevice<D extends ISYNode.DriverSignatures = {}, C extends ISYNode.CommandSignatures = {}> extends ISYDeviceNode<Family.Insteon, Merge<{
    "ST": {
        name: "status";
        label: "Status";
        value: number;
        uom: UnitOfMeasure;
    };
}, D>, C> {
    constructor(isy: ISY, deviceNode: NodeInfo);
    convertFrom(value: any, uom: UnitOfMeasure, driver?: keyof D): any;
    convertTo(value: any, uom: UnitOfMeasure, propertyName?: keyof D): any;
    sendBeep(level?: number): Promise<any>;
}
//# sourceMappingURL=InsteonBaseDevice.d.ts.map
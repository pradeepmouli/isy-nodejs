import { UnitOfMeasure } from '../../Definitions/Global/UOM.js';
import { Insteon } from '../../Definitions/index.js';
import type { ISY } from '../../ISY.js';
import type { ISYNode } from '../../ISYNode.js';
import type { NodeInfo } from '../../Model/NodeInfo.js';
import { ISYDeviceNode } from '../ISYDeviceNode.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
export declare const nodeDefId = "RelayLampSwitch";
type Commands = RelayLampSwitch.Commands;
type Drivers = RelayLampSwitch.Drivers;
export declare class RelayLampSwitchNode extends InsteonBaseDevice<Drivers, Commands> implements RelayLampSwitch.Interface {
    readonly commands: {
        DON: (value?: 0 | 100) => Promise<any>;
        DOF: () => Promise<any>;
        DFOF: () => Promise<any>;
        DFON: () => Promise<any>;
        QUERY: () => Promise<any>;
        BEEP: (value?: number) => Promise<any>;
        BL: (value: number) => Promise<any>;
        WDU: () => Promise<any>;
    };
    static nodeDefId: string;
    readonly nodeDefId: 'RelayLampSwitch';
    constructor(isy: ISY, nodeInfo: NodeInfo);
    on(value?: 0 | 100): Promise<any>;
    off(): Promise<any>;
    fastOff(): Promise<any>;
    fastOn(): Promise<any>;
    query(): Promise<any>;
    beep(value?: number): Promise<any>;
    backlight(value: number): Promise<any>;
    writeChanges(): Promise<any>;
    get status(): boolean;
    get responding(): Insteon.Error;
}
export declare namespace RelayLampSwitch {
    interface Interface extends Omit<InstanceType<typeof RelayLampSwitchNode>, keyof ISYDeviceNode<any, any, any, any>> {
        nodeDefId: 'RelayLampSwitch';
    }
    function is(node: ISYNode<any, any, any, any>): node is RelayLampSwitchNode;
    function create(isy: ISY, nodeInfo: NodeInfo): RelayLampSwitchNode;
    const Node: typeof RelayLampSwitchNode;
    type Commands = {
        DON: ((value?: 0 | 100) => Promise<boolean>) & {
            label: 'On';
            name: 'on';
        };
        DOF: (() => Promise<boolean>) & {
            label: 'Off';
            name: 'off';
        };
        DFOF: (() => Promise<boolean>) & {
            label: 'Fast Off';
            name: 'fastOff';
        };
        DFON: (() => Promise<boolean>) & {
            label: 'Fast On';
            name: 'fastOn';
        };
        QUERY: (() => Promise<boolean>) & {
            label: 'Query';
            name: 'query';
        };
        BEEP: ((value?: number) => Promise<boolean>) & {
            label: 'Beep';
            name: 'beep';
        };
        BL: ((value: number) => Promise<boolean>) & {
            label: 'Backlight';
            name: 'backlight';
        };
        WDU: (() => Promise<boolean>) & {
            label: 'Write Changes';
            name: 'writeChanges';
        };
    };
    type Drivers = {
        ST: {
            uom: UnitOfMeasure.Boolean;
            value: boolean;
            label: 'Status';
            name: 'status';
        };
        ERR: {
            uom: UnitOfMeasure.Index;
            value: Insteon.Error;
            label: 'Responding';
            name: 'responding';
        };
    };
}
export {};
//# sourceMappingURL=RelayLampSwitch.d.ts.map
import type { NodeInfo } from '../../Definitions/NodeInfo.js';
import type { ISY } from '../../ISY.js';
import { InsteonRelayDevice } from './InsteonRelayDevice.js';
import 'winston';
declare const InsteonRelaySwitchDevice_base: {
    new (...args: any[]): {
        isDimmable: boolean;
        convertFrom(value: any, uom: import("../../Definitions/UOM.js").UnitOfMeasure, propertyName?: string): any;
        convertTo(value: any, uom: import("../../Definitions/UOM.js").UnitOfMeasure, propertyName?: string): any;
        sendBeep(level?: number): Promise<any>;
        family: import("../../ISY.js").Family.Insteon;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family.Insteon, string, string>;
        readonly children: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family.Insteon, string, string>[];
        readonly scenes: import("../../ISYScene.js").ISYScene[];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        addLink(isyScene: import("../../ISYScene.js").ISYScene): void;
        addChild(childDevice: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family.Insteon, string, string>): void;
        readonly parentDevice: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family.Insteon, string, string>;
        readProperty(propertyName: string): Promise<import("../../Definitions/PropertyStatus.js").PropertyStatus>;
        readProperties(): Promise<import("../../Definitions/PropertyStatus.js").PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: import("../../Definitions/PropertyStatus.js").PropertyStatus | import("../../Definitions/PropertyStatus.js").PropertyStatus[];
        }): void;
        applyStatus(prop: import("../../Definitions/PropertyStatus.js").PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: any, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & typeof InsteonRelayDevice;
export declare class InsteonRelaySwitchDevice extends InsteonRelaySwitchDevice_base {
    constructor(isy: ISY, deviceNode: NodeInfo);
}
export {};

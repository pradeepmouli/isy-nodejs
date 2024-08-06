import type { NodeInfo } from '../../Model/NodeInfo.js';
import { ISY } from '../../ISY.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
import 'winston';
declare const InsteonDoorWindowSensorDevice_base: {
    new (...args: any[]): {
        readonly state: Promise<boolean>;
        convertTo(value: any, uom: import("../../Definitions/Global/UOM.js").UnitOfMeasure, propertyName?: import("../../Definitions/Global/Drivers.js").Driver.Literal): boolean;
        convertFrom(value: any, uom: number, propertyName?: import("../../Definitions/Global/Drivers.js").Driver.Literal): number;
        family: import("../../ISY.js").Family;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family, import("../../Definitions/Global/Drivers.js").Driver.Literal, string>;
        readonly children: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family, import("../../Definitions/Global/Drivers.js").Driver.Literal, string>[];
        readonly scenes: import("../../ISYScene.js").ISYScene[];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        addLink(isyScene: import("../../ISYScene.js").ISYScene): void;
        addChild<K extends import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family, any, any>>(childDevice: K): void;
        readonly parentDevice: import("../../ISYNode.js").ISYDeviceNode<import("../../ISY.js").Family, import("../../Definitions/Global/Drivers.js").Driver.Literal, string>;
        readProperty(propertyName: import("../../Definitions/Global/Drivers.js").Driver.Literal): Promise<import("../../Model/DriverState.js").DriverState>;
        readProperties(): Promise<import("../../Model/DriverState.js").DriverState[]>;
        updateProperty(propertyName: import("../../Definitions/Global/Drivers.js").Driver.Literal, value: string): Promise<any>;
        sendCommand(command: string, parameters?: Record<string | symbol, string | number> | string | number): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: import("../../Model/DriverState.js").DriverState | import("../../Model/DriverState.js").DriverState[];
        }): void;
        applyStatus(prop: import("../../Model/DriverState.js").DriverState): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(driver: any, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly formatted: import("../../ISYNode.js").DriverValues<import("../../Definitions/Global/Drivers.js").Driver.Literal, string>;
        readonly uom: { [x in import("../../Definitions/Global/Drivers.js").Driver.Literal]?: import("../../Definitions/Global/UOM.js").UnitOfMeasure; };
        readonly pending: import("../../ISYNode.js").DriverValues<import("../../Definitions/Global/Drivers.js").Driver.Literal, any>;
        readonly local: import("../../ISYNode.js").DriverValues<import("../../Definitions/Global/Drivers.js").Driver.Literal, any>;
        readonly drivers: {
            ACCX?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ACCY?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ACCZ?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            AIRFLOW?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            AQI?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ALARM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ANGLPOS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ATMPRES?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ADRPST?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            AWAKE?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BARPRES?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BATLVL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BEEP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BPDIA?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BPSYS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BMI?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BONEM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BRT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CO?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CO2LVL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CTL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLISPC?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CC?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CPW?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLITEMP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CV?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV0?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV1?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV2?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV3?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV30?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV4?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV5?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV6?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV7?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV8?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV9?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV10?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV11?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV12?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV13?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV14?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV15?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV16?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV17?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV18?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV19?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV20?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV21?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV22?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV23?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV24?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV25?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV26?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV27?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV28?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GV29?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DELAY?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DEWPT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            BUSY?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SECMD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DIM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DISTANC?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WATERTD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DUR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ELECCON?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ELECRES?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIEMD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ERR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ETO?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TEMPEXH?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            FDDOWN?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            FDSTOP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            FDUP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIFRS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIFS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIFSO?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DFOF?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DFON?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CH20?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            FREQ?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GPV?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GVOL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            GUST?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIHCS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            HEATIX?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLISPH?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            HAIL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            HR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIHUM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            LUMIN?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            METHANE?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            MODE?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            MOIST?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            MOON?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            MUSCLEM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DOF?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DOF3?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DOF4?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DOF5?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DON?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DON3?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DON4?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            DON5?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            OL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            OZONE?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PM10?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PM25?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            POP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PPW?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PF?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PRECIP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            PULSCNT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            QUERY?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RADON?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RAINRT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RELMOD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RESET?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RESPR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            RFSS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ROTATE?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLISMD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SEISINT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SEISMAG?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SMOKED?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SOILH?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SOILR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SOILS?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SOILT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SOLRAD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SVOL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            SPEED?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            ST?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TANKCAP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            USRNUM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            CLIMD?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TIDELVL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TIME?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TIMEREM?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TBW?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TPW?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            UV?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            UAC?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            VOCLVL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WATERF?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WATERP?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WATERT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WVOL?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WEIGHT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WINDCH?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WINDDIR?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            WATERTB?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
            TEMPOUT?: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>;
        } & {
            add(driver: import("../../Definitions/Global/Drivers.js").Driver<import("../../Definitions/Global/Drivers.js").DriverType>): void;
        };
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        label: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseLabel: string;
        propsInitialized: boolean;
        logger: (msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger;
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: {
            control?: any;
            data?: any;
            node?: any;
            action?: any;
            fmtAct?: any;
        }): boolean;
        generateLabel(template: string): string;
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
} & typeof InsteonBaseDevice;
export declare class InsteonDoorWindowSensorDevice extends InsteonDoorWindowSensorDevice_base {
    constructor(isy: ISY, deviceNode: NodeInfo);
    get isOpen(): Promise<boolean>;
}
export {};
//# sourceMappingURL=InsteonDoorWindowSensorDevice.d.ts.map
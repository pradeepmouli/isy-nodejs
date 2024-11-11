import WebSocket from 'faye-websocket';
import { type ParserOptions } from 'xml2js';
import { EventEmitter } from 'events';
import { Logger } from 'winston';
import { Category } from './Definitions/Global/Categories.js';
import { Family } from './Definitions/Global/Families.js';
import { ELKAlarmPanelDevice } from './Devices/Elk/ElkAlarmPanelDevice.js';
import { ElkAlarmSensorDevice } from './Devices/Elk/ElkAlarmSensorDevice.js';
import { InsteonBaseDevice } from './Devices/Insteon/InsteonBaseDevice.js';
import { InsteonOutletDevice } from './Devices/Insteon/InsteonDevice.js';
import { InsteonDimmableDevice } from './Devices/Insteon/InsteonDimmableDevice.js';
import { InsteonDimmerOutletDevice } from './Devices/Insteon/InsteonDimmerOutletDevice.js';
import { InsteonDimmerSwitchDevice } from './Devices/Insteon/InsteonDimmerSwitchDevice.js';
import { InsteonDoorWindowSensorDevice } from './Devices/Insteon/InsteonDoorWindowSensorDevice.js';
import { InsteonFanDevice, InsteonFanMotorDevice } from './Devices/Insteon/InsteonFanDevice.js';
import { InsteonKeypadButtonDevice } from './Devices/Insteon/InsteonKeypadDevice.js';
import { InsteonKeypadDimmerDevice } from './Devices/Insteon/InsteonKeypadDimmerDevice.js';
import { InsteonKeypadRelayDevice } from './Devices/Insteon/InsteonKeypadRelayDevice.js';
import { InsteonLeakSensorDevice } from './Devices/Insteon/InsteonLeakSensorDevice.js';
import { InsteonLockDevice } from './Devices/Insteon/InsteonLockDevice.js';
import { InsteonMotionSensorDevice } from './Devices/Insteon/InsteonMotionSensorDevice.js';
import { InsteonOnOffOutletDevice } from './Devices/Insteon/InsteonOnOffOutletDevice.js';
import { InsteonRelayDevice } from './Devices/Insteon/InsteonRelayDevice.js';
import { InsteonSmokeSensorDevice } from './Devices/Insteon/InsteonSmokeSensorDevice.js';
import { InsteonThermostatDevice } from './Devices/Insteon/InsteonThermostatDevice.js';
import { ISYDeviceNode } from './Devices/ISYDeviceNode.js';
import { NodeType, Props, States, VariableType } from './ISYConstants.js';
import { type ISYDevice } from './ISYDevice.js';
import { ISYNode } from './ISYNode.js';
import { ISYScene } from './ISYScene.js';
import { ISYVariable } from './ISYVariable.js';
import * as Utils from './Utils.js';
import type { Config } from './Model/Config.js';
export { Category as Categories, ELKAlarmPanelDevice, ElkAlarmSensorDevice, Family, InsteonBaseDevice, InsteonDimmableDevice, InsteonDimmerOutletDevice, InsteonDimmerSwitchDevice, InsteonDoorWindowSensorDevice, InsteonFanDevice, InsteonFanMotorDevice, InsteonKeypadButtonDevice, InsteonKeypadDimmerDevice, InsteonKeypadRelayDevice, InsteonLeakSensorDevice, InsteonLockDevice, InsteonMotionSensorDevice, InsteonOnOffOutletDevice, InsteonOutletDevice, InsteonRelayDevice, InsteonSmokeSensorDevice, InsteonThermostatDevice, ISYDeviceNode as ISYDevice, ISYNode, ISYScene, ISYVariable, NodeType, Props, States, Utils, VariableType };
export declare let Controls: {};
interface ISYConfig {
    displayNameFormat?: string;
    elkEnabled?: boolean;
    enableWebSocket?: boolean;
    host: string;
    password: string;
    port: number;
    protocol: 'http' | 'https';
    username: string;
}
export declare class ISY extends EventEmitter implements Disposable {
    #private;
    readonly credentials: {
        username: string;
        password: string;
    };
    readonly deviceList: Map<string, ISYDevice<any, any, any, any>>;
    readonly deviceMap: Map<string, string[]>;
    readonly displayNameFormat: string;
    readonly elkEnabled: boolean;
    readonly enableWebSocket: boolean;
    readonly folderMap: Map<string, string>;
    readonly host: string;
    readonly nodeMap: Map<string, ISYNode<any, any, any, any>>;
    readonly port: number;
    readonly protocol: string;
    readonly sceneList: Map<string, ISYScene>;
    readonly storagePath: string;
    readonly variableList: Map<string, ISYVariable<VariableType>>;
    readonly wsprotocol: 'ws' | 'wss';
    readonly zoneMap: Map<string, ElkAlarmSensorDevice>;
    static instance: ISY;
    configInfo: Config;
    elkAlarmPanel: ELKAlarmPanelDevice;
    guardianTimer: any;
    id: string;
    lastActivity: any;
    logger: Logger;
    model: any;
    nodesLoaded: boolean;
    productId: number;
    productName: string;
    firmwareVersion: any;
    vendorName: string;
    webSocket: WebSocket.Client;
    apiVersion: string;
    constructor(config: ISYConfig, logger?: Logger, storagePath?: string);
    get address(): string;
    get isDebugEnabled(): boolean;
    [Symbol.dispose](): void;
    emit(event: 'InitializeCompleted' | 'NodeAdded' | 'NodeRemoved' | 'NodeChanged', node?: ISYNode<any, any, any, any>): boolean;
    getDevice<T extends ISYDevice<any, any, any, any> = ISYDevice<any, any, any, any>>(address: string, parentsOnly?: boolean): T;
    getElkAlarmPanel(): ELKAlarmPanelDevice;
    getNode<T extends ISYNode<any, any, any, any> = ISYNode<any, any, any, any>>(address: string, parentsOnly?: boolean): T;
    getScene(address: string): ISYScene;
    getVariable<P extends VariableType>(type: P, id: number): ISYVariable<P>;
    getVariableList(): Map<string, ISYVariable<VariableType>>;
    handleInitializeError(step: string, reason: any): Promise<any>;
    handleWebSocketMessage(event: {
        data: any;
    }): void;
    initialize(): Promise<any>;
    initializeWebSocket(): void;
    loadConfig(): Promise<any>;
    loadNodes(): Promise<any>;
    loadVariables(type: VariableType): Promise<any>;
    nodeChangedHandler(node: ELKAlarmPanelDevice | ElkAlarmSensorDevice, propertyName?: any): void;
    on(event: 'initializeCompleted', listener: () => void): this;
    on(event: 'nodeAdded' | 'nodeRemoved' | 'nodeChanged', listener: (node?: ISYNode<any, any, any, any>) => void): this;
    refreshStatuses(): Promise<void>;
    sendGetVariable(id: any, type: any, handleResult: (arg0: number, arg1: number) => void): Promise<void>;
    sendISYCommand(path: string): Promise<any>;
    sendNodeCommand<P extends string | symbol, N extends ISYNode<any, any, any, any>>(node: N, command: string, parameters?: Record<P, string | number> | string | number): Promise<any>;
    sendRequest(url: string, options?: {
        parserOptions?: ParserOptions;
        trailingSlash: boolean;
        requestLogLevel?: any;
        responseLogLevel?: any;
        errorLogLevel?: any;
    }): Promise<any>;
    sendSetVariable(id: any, type: any, value: any, handleResult: {
        (success: any): void;
        (arg0: boolean): void;
        (arg0: boolean): void;
    }): Promise<any>;
    close(): void;
}
export declare namespace ISY {
    interface Config extends ISYConfig {
    }
}
//# sourceMappingURL=ISY.d.ts.map
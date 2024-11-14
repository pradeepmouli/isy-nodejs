import { NodeInfo } from '../../Model/NodeInfo.js';
import { InsteonRelayDevice } from './InsteonRelayDevice.js';
import { ISYNode } from '../../ISYNode.js';
import type { Constructor } from '../Constructor.js';
import { Family } from '../../Definitions/index.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
export declare class InsteonDeviceFactory {
    static getDeviceDetails(node: NodeInfo): {
        name: string;
        modelNumber?: string;
        version?: string;
        class?: Constructor<ISYNode<Family.Insteon, any, any>>;
        unsupported?: true;
    };
    static getInsteonDeviceDetails(node: NodeInfo): {
        name: string;
        modelNumber?: string;
        version?: string;
        class: Constructor<ISYNode<Family.Insteon, any, any>>;
        unsupported?: true;
    };
    static getNetworkBridgeInfo(deviceCode: number): {
        name: string;
        modelNumber: string;
        version: string;
        class: Constructor<ISYNode<Family.Insteon, any, any>>;
    };
    static getIrrigationControlInfo(deviceCode: number): {
        name: string;
        modelNumber?: string;
        version?: string;
        class?: InsteonBaseDevice;
    };
    static getSwitchLightInfo(deviceCode: number, subAddress: string): {
        name: string;
        modelNumber?: string;
        version?: string;
        class?: typeof InsteonRelayDevice;
    };
    private static getDimLightInfo;
    private static getControllerInfo;
    private static getIOControlInfo;
    private static getSHS;
    private static getClimateControlInfo;
    private static getAccessControlInfo;
    private static getEnergyManagement;
    private static getWindowsCovering;
}
//# sourceMappingURL=InsteonDeviceFactory.d.ts.map
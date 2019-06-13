import { ISYDevice } from './isydevice.js';
export declare class ELKAlarmPanelDevice extends ISYDevice {
    area: any;
    alarmTripState: number;
    alarmState: number;
    alarmMode: number;
    deviceFriendlyName: string;
    deviceType: any;
    connectionType: string;
    batteryOperated: boolean;
    voltage: number;
    constructor(isy: any, area: any, node: any);
    sendSetAlarmModeCommand(alarmState: any): Promise<any>;
    clearAllBypasses(): Promise<any>;
    getAlarmStatusAsText(): string;
    getAlarmTripState(): number;
    getAlarmState(): number;
    getAlarmMode(): number;
    setFromAreaUpdate(areaUpdate: any): boolean;
}
export declare class ElkAlarmSensorDevice extends ISYDevice {
    area: any;
    zone: any;
    deviceFriendlyName: string;
    deviceType: any;
    connectionType: string;
    batteryOperated: boolean;
    physicalState: number;
    logicalState: number;
    voltage: number;
    constructor(isy: any, name: any, area: any, zone: any, deviceType: any);
    sendBypassToggleCommand(): Promise<any>;
    getPhysicalState(): number;
    isBypassed(): boolean;
    getLogicalState(): number;
    getCurrentDoorWindowState(): boolean;
    getSensorStatus(): string;
    isPresent(): boolean;
    setFromZoneUpdate(zoneUpdate: any): boolean;
}

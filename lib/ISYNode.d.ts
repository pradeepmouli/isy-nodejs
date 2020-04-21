/// <reference types="node" />
import { EventEmitter } from 'events';
import { Family } from './Families';
import { ISY, NodeType } from './ISY';
import { PropertyChangedEventEmitter } from './Utils';
export declare class ISYNode extends EventEmitter implements PropertyChangedEventEmitter {
    readonly isy: ISY;
    readonly flag: any;
    readonly nodeDefId: string;
    readonly address: string;
    [x: string]: any;
    name: string;
    displayName: string;
    folder: string;
    parent: any;
    parentType: NodeType;
    readonly elkId: string;
    nodeType: number;
    propertyChanged: EventEmitter;
    propsInitialized: boolean;
    logger: (msg: any) => void;
    lastChanged: Date;
    enabled: boolean;
    constructor(isy: ISY, node: {
        flag?: any;
        nodeDefId?: string;
        address?: string;
        name?: string;
        family?: Family;
        parent?: any;
        enabled: boolean;
        ELK_ID?: string;
    });
    handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
    on(event: 'PropertyChanged', listener: (propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any): this;
    emit(event: 'PropertyChanged', propertyName: string, newValue: any, oldValue: any, formattedValue: string): boolean;
    handleEvent(event: any): boolean;
    onPropertyChanged(propertyName: any, callback: (...args: any[]) => void): void;
}

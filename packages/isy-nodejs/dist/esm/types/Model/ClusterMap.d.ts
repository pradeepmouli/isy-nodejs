import * as Clusters from '@project-chip/matter.js/cluster';
import { Family } from '../ISY.js';
import { ClusterBehavior } from '@project-chip/matter.js/behavior/cluster';
import { Devices } from '../Devices/index.js';
import { Behavior } from '@project-chip/matter.js/behavior';
import type { ISYNode } from '../ISYNode.js';
import type { ISYDevice } from '../ISYDevice.js';
import { SupportedBehaviors } from '@project-chip/matter.js/endpoint/properties';
import type { MutableEndpoint } from '@project-chip/matter.js/endpoint/type';
import type { CommandsOf, DriversOf } from '../ISYNode.js';
export type DeviceToClusterMap<T extends ISYNode<Family, any, any, any>, D> = D extends {
    behaviors: SupportedBehaviors;
    deviceType: string;
} ? {
    deviceType: D;
    mapping: EndpointMapping<D, T>;
} : never;
export declare class MappingRegistry {
    static map: Map<string, DeviceToClusterMap<any, any>>;
    static register(map: Partial<FamilyToClusterMap<any>>): void;
    static getMapping<T extends ISYDevice<any, any, any>>(device: T): {
        deviceType: any;
        mapping: EndpointMapping<any, any>;
    };
    static getMappingForBehavior<T extends ISYDevice<any, any, any>, B extends ClusterBehavior>(device: T, behavior: B): ClusterMapping<B["cluster"], T>;
}
export type FamilyToClusterMap<T extends Family.Insteon | Family.ZWave | Family.ZigBee> = {
    [Type in keyof Devices.Insteon]?: DeviceToClusterMap<InstanceType<Devices.Insteon[Type]>, any>;
};
export type ClusterMapping<A, K> = {
    attributes: ClusterAttributeMapping<A, K>;
    commands: ClusterCommandMapping<A, K>;
};
export type EndpointMapping1<A extends MutableEndpoint, K> = {
    attributes?: SBAttributeMapping<A["behaviors"], K>;
    commands?: SBCommandMapping<A["behaviors"], K>;
};
type StringKeys<T> = Extract<keyof T, string>;
export type EndpointMapping<A extends {
    behaviors: any;
}, D> = {
    [K in Capitalize<StringKeys<A["behaviors"]>>]?: {
        attributes?: AttributeMapping<A["behaviors"][Uncapitalize<K>], D>;
        commands?: CommandMapping<A["behaviors"][Uncapitalize<K>], D>;
    };
};
export type SBAttributeMapping<SB extends SupportedBehaviors, D> = {
    [K in keyof SB]: Partial<Record<keyof Behavior.StateOf<SB[K]>, DriversOf<D> | {
        driver: DriversOf<D>;
        converter?: string;
    }>>;
};
export type AttributeMapping<B, D> = B extends {
    cluster: {
        attributes: infer E extends {
            [K in string]: Clusters.ClusterType.Attribute;
        };
    };
} ? Partial<Record<keyof E, keyof DriversOf<D> | {
    driver: keyof DriversOf<D>;
    converter?: string;
}>> : never;
export type CommandMapping<B, D> = B extends {
    cluster: {
        commands: infer E extends {
            [K in string]: Clusters.ClusterType.Command;
        };
    };
} ? Partial<Record<keyof E, keyof CommandsOf<D> | {
    command: keyof CommandsOf<D>;
    parameters?: parameterMapping;
}>> : never;
export type SBCommandMapping<SB extends SupportedBehaviors, D> = {
    [K in Capitalize<keyof SB>]?: SB[Uncapitalize<K>] extends {
        cluster: {
            commands: any;
        };
    } ? Partial<Record<keyof SB[K]["cluster"]["commands"], CommandsOf<D> | {
        driver: DriversOf<D>;
        converter?: string;
    }>> : never;
};
export type ClusterAttributeMapping<A, K> = {
    [key in keyof Clusters.ClusterType.AttributesOf<A>]?: {
        driver: Extract<keyof DriversOf<K>, string>;
        converter?: (value: any) => any;
    } | Extract<keyof DriversOf<K>, string>;
};
export type ClusterCommandMapping<A, K> = {
    [key in keyof Clusters.ClusterType.CommandsOf<A>]?: {
        command: keyof CommandsOf<K>;
        parameters?: parameterMapping;
    } | keyof CommandsOf<K>;
};
export type parameterMapping = {
    [key: string]: {
        parameter: string;
        converter?: (string);
    };
};
export {};
//# sourceMappingURL=ClusterMap.d.ts.map
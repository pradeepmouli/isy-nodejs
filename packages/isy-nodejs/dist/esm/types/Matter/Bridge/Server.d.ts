import '@project-chip/matter-node.js';
import { ServerNode } from '@project-chip/matter.js/node';
import { ISY } from '../../ISY.js';
import '../Mappings/Insteon.js';
export declare let instance: ServerNode;
export interface Config {
    discriminator: number;
    passcode: number;
    port: number;
    productId: number;
    productName?: string;
    uniqueId: string;
    vendorId: number;
    vendorName?: string;
}
export declare function create(isy?: ISY, config?: Config): Promise<ServerNode>;
export declare function createMatterServer(isy?: ISY, config?: Config): Promise<ServerNode>;
type PairingCodeData = {
    qrPairingCode: string;
    manualPairingCode: string;
    renderedQrPairingCode: string;
    url: string | URL;
};
export declare function getPairingCode(server?: ServerNode): PairingCodeData;
export {};
//# sourceMappingURL=Server.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYDeviceNode = void 0;
const ISYNode_js_1 = require("../ISYNode.js");
class ISYDeviceNode extends ISYNode_js_1.ISYNode {
    typeCode;
    deviceClass;
    category;
    subCategory;
    declare;
    //public readonly isDimmable: boolean;
    //public _parentDevice: ISYDeviceNode<T, any, any, any>;
    //public readonly children: Array<ISYDeviceNode<T, any, any, any>> = [];
    _enabled;
    productName;
    model;
    modelNumber;
    version;
    constructor(isy, node) {
        super(isy, node);
        this.family = node.family;
        this.nodeType = 1;
        this.type = node.type;
        this._enabled = node.enabled;
        this.deviceClass = node.deviceClass;
        this.parentAddress = node.pnode;
        const s = this.type.split(".");
        this.category = Number(s[0]);
        this.subCategory = Number(s[1]);
        // console.log(nodeDetail);
        // if (this.parentAddress !== this.address && this.parentAddress !== undefined) {
        //   this._parentDevice = isy.getDevice(this.parentAddress) as unknown as ISYDeviceNode<T, any, any, any>;
        //   if (!isNullOrUndefined(this._parentDevice)) {
        //     this._parentDevice.addChild(this);
        //   }
        // }
        // if (Array.isArray(node.property)) {
        //   for (const prop of node.property) {
        //     this.local[prop.id] = this.convertFrom(prop.value, prop.uom, prop.id as Driver.Literal);
        //     this.formatted[prop.id] = prop.formatted;
        //     this.uom[prop.id] = prop.uom;
        //     this.logger(
        //       `Property ${Controls[prop.id].label} (${prop.id}) initialized to: ${this.local[prop.id]} (${this.formatted[prop.id]})`
        //     );
        //   }
        // } else if (node.property) {
        //   this.local[node.property.id] = this.convertFrom(
        //     node.property.value,
        //     node.property.uom,
        //     node.property.id as Driver.Literal
        //   );
        //   this.formatted[node.property.id] = node.property.formatted;
        //   this.uom[node.property.id] = node.property.uom;
        //   this.logger(
        //     `Property ${Controls[node.property.id].label} (${node.property.id}) initialized to: ${this.local[node.property.id]} (${this.formatted[node.property.id]})`
        //   );
        // }
    }
    _parentDevice;
    children;
    addChild(childDevice) {
        this.children.push(childDevice);
    }
}
exports.ISYDeviceNode = ISYDeviceNode;
//# sourceMappingURL=ISYDeviceNode.js.map
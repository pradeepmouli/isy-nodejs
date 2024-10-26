"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYVariable = void 0;
const events_1 = require("events");
const ISYConstants_js_1 = require("./ISYConstants.js");
const varT = (t) => ISYConstants_js_1.VariableType.Integer ? typeof Number : typeof String;
class ISYVariable extends events_1.EventEmitter {
    isy;
    id;
    name;
    value;
    init;
    type;
    lastChanged;
    constructor(isy, id, name, type) {
        super();
        this.isy = isy;
        this.id = id;
        this.name = name;
        this.value = undefined;
        this.init = undefined;
        this.lastChanged = new Date();
    }
    handleEvent(event) {
        const varNode = event.eventInfo.var;
        if (varNode !== null) {
            const id = varNode.id;
            const type = varNode.type;
            const priorVal = this.value;
            this.value = parseInt(varNode.val);
            const year = parseInt(varNode.ts.substr(0, 4));
            const month = parseInt(varNode.ts.substr(4, 2));
            const day = parseInt(varNode.ts.substr(6, 2));
            const hour = parseInt(varNode.ts.substr(9, 2));
            const min = parseInt(varNode.ts.substr(12, 2));
            const sec = parseInt(varNode.ts.substr(15, 2));
            this.lastChanged = new Date(year, month, day, hour, min, sec);
            this.emit('ValueChanged', this.value, priorVal);
        }
    }
    async updateValue(value) {
        const p = await this.isy.sendRequest(`vars\\${this.type}\\${this.id}\\${value}`);
        this.value = value;
        return p;
    }
}
exports.ISYVariable = ISYVariable;
//# sourceMappingURL=ISYVariable.js.map
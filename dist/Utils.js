import winston, { format } from 'winston';
import { Categories } from './Categories.js';
import { EventEmitter as BaseEventEmitter } from 'events';
export function byteToPct(value) {
    return Math.round((value * 100) / 255);
}
export function pctToByte(value) {
    return Math.round((value * 255) / 100);
}
export function byteToDegree(value) {
    return Math.fround(value / 2);
}
let lastrequest = Promise.resolve();
// `${`${const origCreateLogger = winston.createLogger.bind(winston)
// Logger.prototwinston.createLogger = (options) =>
// {
// let logger =  winston.createLogger(options);
// logger.prototype = logger.log.bind(logger);
// }
// }`}`
export function clone(logger, label) {
    return winston.createLogger({
        format: format.label({ label }),
        transports: logger.transports,
        level: logger.level,
        levels: logger.levels,
        exitOnError: logger.exitOnError,
        exceptionHandlers: logger.exceptions,
        ...logger
    });
    // `${const copy1 = { ...logger };copy1.prefix = copy1.prefix = prefix ?? logger.prototype;
    // const copy = logger.info.bind(copy1) as Logging;
    // Object.assign(copy, logger);
    // copy.prefix = prefix ?? logger.prefix;
    // copy.isDebugEnabled = () => ISYPlatform.Instance.debugLoggingEnabled;
    // copy.isErrorEnabled = () => true;
    // copy.isWarnEnabled = () => true;
    // copy.isFatalEnabled = () => true;
    // copy.isTraceEnabled = () => true;
    // // copy._log = logger._log.bind(copy);
    // copy.debug = logger.debug.bind(copy);
    // // copy.fatal = logger..bind(copy);
    // copy.info = logger.info.bind(copy);
    // copy.error = logger.error.bind(copy);
    // copy.warn = logger.warn.bind(copy);
    // copy.trace = ((message: ConcatArray<string>, ...args: any[]) => {
    // 	// onst newMsg = chalk.dim(msg);
    // 	if (copy.isTraceEnabled) {
    // 		copy.log.apply(this, ['trace'].concat(message).concat(args));
    // 	}
    // }).bind(copy);
    // copy.fatal = ((message: ConcatArray<string>, ...args: any[]) => {
    // 	// onst newMsg = chalk.dim(msg);
    // 	if (logger?.isFatalEnabled) {
    // 		logger.log.apply(this, ['fatal'].concat(message).concat(args));
    // 	}
    // }).bind(copy);}`
    //return copy;
}
export class EventEmitter extends BaseEventEmitter {
    on(event, listener) {
        return super.on(event, listener);
    }
}
export function right(numChars) {
    var l = this.length;
    return this.substring(length - numChars);
}
export function left(numChars) {
    return this.substring(0, numChars - 1);
}
export function rightTokenize(maxNumChars, token) {
    var s = this.split(token);
    var sb = s.pop();
    var sp = s.pop();
    while (sb.length + sp.length + 1 < maxNumChars && s.length > 0) {
        sb = sp + token + sb;
    }
}
export function leftTokenize(maxNumChars, token) {
    var s = this.split(token).reverse();
    var sb = s.pop();
    var sp = s.pop();
    while (sb.length + sp.length + 1 < maxNumChars && s.length > 0) {
        sb = sb + token + sp;
    }
}
export function remove(searchValue) {
    return this.replace(searchValue, '');
}
export function removeAll(searchValue) {
    return this.replaceAll(searchValue, '');
}
export function parseTypeCode(typeCode) {
    try {
        const s = typeCode.split('.');
        let output = { category: Number(s[0]), deviceCode: Number(s[1]), firmwareVersion: Number(Number(s[2]).toString(16)), minorVersion: Number(Number(s[3]).toString(16)) };
        return output;
    }
    catch (err) {
        return null;
    }
}
export function getCategory(device) {
    try {
        const s = device.type.split('.');
        return Number(s[0]);
    }
    catch (err) {
        return Categories.Unknown;
    }
}
export function getSubcategory(device) {
    try {
        const s = device.type.split('.');
        return Number(s[1]);
    }
    catch (err) {
        return Categories.Unknown;
    }
}

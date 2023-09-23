Object.defineProperty(exports, "__esModule", { value: true });
exports.ISY = exports.Controls = exports.ELKAlarmPanelDevice = exports.ElkAlarmSensorDevice = exports.NodeType = exports.ISYNode = exports.InsteonMotionSensorDevice = exports.InsteonRelayDevice = exports.InsteonDimmerSwitchDevice = exports.InsteonDoorWindowSensorDevice = exports.InsteonThermostatDevice = exports.InsteonLockDevice = exports.InsteonOnOffOutletDevice = exports.InsteonDimmerOutletDevice = exports.InsteonSmokeSensorDevice = exports.InsteonLeakSensorDevice = exports.InsteonFanMotorDevice = exports.InsteonFanDevice = exports.InsteonDimmableDevice = exports.InsteonKeypadButtonDevice = exports.InsteonKeypadRelayDevice = exports.InsteonKeypadDimmerDevice = exports.ISYDevice = exports.InsteonOutletDevice = exports.InsteonBaseDevice = exports.ISYVariable = exports.Props = exports.Categories = exports.VariableType = exports.Family = exports.States = exports.ISYScene = void 0;
const faye_websocket_1 = require("faye-websocket");
const fs_1 = require("fs");
const restler_base_1 = require("restler-base");
const xml2js_1 = require("xml2js");
const processors_1 = require("xml2js/lib/processors");
const xmldoc_1 = require("xmldoc");
const Categories_1 = require("./Categories");
Object.defineProperty(exports, "Categories", { enumerable: true, get: function () { return Categories_1.Categories; } });
const DeviceFactory_1 = require("./Devices/DeviceFactory");
const ElkAlarmPanelDevice_1 = require("./Devices/Elk/ElkAlarmPanelDevice");
Object.defineProperty(exports, "ELKAlarmPanelDevice", { enumerable: true, get: function () { return ElkAlarmPanelDevice_1.ELKAlarmPanelDevice; } });
const ElkAlarmSensorDevice_1 = require("./Devices/Elk/ElkAlarmSensorDevice");
Object.defineProperty(exports, "ElkAlarmSensorDevice", { enumerable: true, get: function () { return ElkAlarmSensorDevice_1.ElkAlarmSensorDevice; } });
const InsteonBaseDevice_1 = require("./Devices/Insteon/InsteonBaseDevice");
Object.defineProperty(exports, "InsteonBaseDevice", { enumerable: true, get: function () { return InsteonBaseDevice_1.InsteonBaseDevice; } });
const InsteonDevice_1 = require("./Devices/Insteon/InsteonDevice");
Object.defineProperty(exports, "InsteonOutletDevice", { enumerable: true, get: function () { return InsteonDevice_1.InsteonOutletDevice; } });
const InsteonDimmableDevice_1 = require("./Devices/Insteon/InsteonDimmableDevice");
Object.defineProperty(exports, "InsteonDimmableDevice", { enumerable: true, get: function () { return InsteonDimmableDevice_1.InsteonDimmableDevice; } });
const InsteonDimmerSwitchDevice_1 = require("./Devices/Insteon/InsteonDimmerSwitchDevice");
Object.defineProperty(exports, "InsteonDimmerSwitchDevice", { enumerable: true, get: function () { return InsteonDimmerSwitchDevice_1.InsteonDimmerSwitchDevice; } });
const InsteonDoorWindowSensorDevice_1 = require("./Devices/Insteon/InsteonDoorWindowSensorDevice");
Object.defineProperty(exports, "InsteonDoorWindowSensorDevice", { enumerable: true, get: function () { return InsteonDoorWindowSensorDevice_1.InsteonDoorWindowSensorDevice; } });
const InsteonFanDevice_1 = require("./Devices/Insteon/InsteonFanDevice");
Object.defineProperty(exports, "InsteonFanDevice", { enumerable: true, get: function () { return InsteonFanDevice_1.InsteonFanDevice; } });
Object.defineProperty(exports, "InsteonFanMotorDevice", { enumerable: true, get: function () { return InsteonFanDevice_1.InsteonFanMotorDevice; } });
const InsteonKeypadRelayDevice_1 = require("./Devices/Insteon/InsteonKeypadRelayDevice");
Object.defineProperty(exports, "InsteonKeypadRelayDevice", { enumerable: true, get: function () { return InsteonKeypadRelayDevice_1.InsteonKeypadRelayDevice; } });
const InsteonKeypadDimmerDevice_1 = require("./Devices/Insteon/InsteonKeypadDimmerDevice");
Object.defineProperty(exports, "InsteonKeypadDimmerDevice", { enumerable: true, get: function () { return InsteonKeypadDimmerDevice_1.InsteonKeypadDimmerDevice; } });
const InsteonLeakSensorDevice_1 = require("./Devices/Insteon/InsteonLeakSensorDevice");
Object.defineProperty(exports, "InsteonLeakSensorDevice", { enumerable: true, get: function () { return InsteonLeakSensorDevice_1.InsteonLeakSensorDevice; } });
const InsteonLockDevice_1 = require("./Devices/Insteon/InsteonLockDevice");
Object.defineProperty(exports, "InsteonLockDevice", { enumerable: true, get: function () { return InsteonLockDevice_1.InsteonLockDevice; } });
const InsteonMotionSensorDevice_1 = require("./Devices/Insteon/InsteonMotionSensorDevice");
Object.defineProperty(exports, "InsteonMotionSensorDevice", { enumerable: true, get: function () { return InsteonMotionSensorDevice_1.InsteonMotionSensorDevice; } });
const InsteonRelayDevice_1 = require("./Devices/Insteon/InsteonRelayDevice");
Object.defineProperty(exports, "InsteonRelayDevice", { enumerable: true, get: function () { return InsteonRelayDevice_1.InsteonRelayDevice; } });
const InsteonThermostatDevice_1 = require("./Devices/Insteon/InsteonThermostatDevice");
Object.defineProperty(exports, "InsteonThermostatDevice", { enumerable: true, get: function () { return InsteonThermostatDevice_1.InsteonThermostatDevice; } });
const ISYDevice_1 = require("./Devices/ISYDevice");
Object.defineProperty(exports, "ISYDevice", { enumerable: true, get: function () { return ISYDevice_1.ISYDevice; } });
const Families_1 = require("./Families");
Object.defineProperty(exports, "Family", { enumerable: true, get: function () { return Families_1.Family; } });
const EventType_1 = require("./Events/EventType");
const ISYConstants_1 = require("./ISYConstants");
Object.defineProperty(exports, "NodeType", { enumerable: true, get: function () { return ISYConstants_1.NodeType; } });
Object.defineProperty(exports, "Props", { enumerable: true, get: function () { return ISYConstants_1.Props; } });
Object.defineProperty(exports, "States", { enumerable: true, get: function () { return ISYConstants_1.States; } });
Object.defineProperty(exports, "VariableType", { enumerable: true, get: function () { return ISYConstants_1.VariableType; } });
const ISYNode_1 = require("./ISYNode");
Object.defineProperty(exports, "ISYNode", { enumerable: true, get: function () { return ISYNode_1.ISYNode; } });
const ProductInfoData = require("./isyproductinfo.json");
const ISYScene_1 = require("./ISYScene");
Object.defineProperty(exports, "ISYScene", { enumerable: true, get: function () { return ISYScene_1.ISYScene; } });
const ISYVariable_1 = require("./ISYVariable");
Object.defineProperty(exports, "ISYVariable", { enumerable: true, get: function () { return ISYVariable_1.ISYVariable; } });
const Utils_1 = require("./Utils");
const InsteonOnOffOutletDevice_1 = require("./Devices/Insteon/InsteonOnOffOutletDevice");
Object.defineProperty(exports, "InsteonOnOffOutletDevice", { enumerable: true, get: function () { return InsteonOnOffOutletDevice_1.InsteonOnOffOutletDevice; } });
const InsteonSmokeSensorDevice_1 = require("./Devices/Insteon/InsteonSmokeSensorDevice");
Object.defineProperty(exports, "InsteonSmokeSensorDevice", { enumerable: true, get: function () { return InsteonSmokeSensorDevice_1.InsteonSmokeSensorDevice; } });
const InsteonDimmerOutletDevice_1 = require("./Devices/Insteon/InsteonDimmerOutletDevice");
Object.defineProperty(exports, "InsteonDimmerOutletDevice", { enumerable: true, get: function () { return InsteonDimmerOutletDevice_1.InsteonDimmerOutletDevice; } });
const InsteonKeypadDevice_1 = require("./Devices/Insteon/InsteonKeypadDevice");
Object.defineProperty(exports, "InsteonKeypadButtonDevice", { enumerable: true, get: function () { return InsteonKeypadDevice_1.InsteonKeypadButtonDevice; } });
const events_1 = require("events");
const parser = new xml2js_1.Parser({
    explicitArray: false,
    mergeAttrs: true,
    attrValueProcessors: [processors_1.parseBooleans, processors_1.parseNumbers],
    valueProcessors: [(a, b) => processors_1.parseNumbers(a), (a, b) => processors_1.parseBooleans(a)]
});
exports.Controls = {};
const ProductInfo = ProductInfoData;
class ISY extends events_1.EventEmitter {
    constructor(config, logger, storagePath) {
        var _a, _b, _c;
        super();
        this.deviceList = new Map();
        this.deviceMap = new Map();
        this.sceneList = new Map();
        this.folderMap = new Map();
        this.zoneMap = new Map();
        this.variableList = new Map();
        this.nodesLoaded = false;
        this.wsprotocol = 'ws';
        this.storagePath = storagePath !== null && storagePath !== void 0 ? storagePath : './';
        this.displayNameFormat = (_a = config.displayNameFormat) !== null && _a !== void 0 ? _a : '${location ?? folder} ${spokenName ?? name}';
        this.address = config.host;
        this.logger = logger;
        this.credentials = {
            username: config.username,
            password: config.password
        };
        this.restlerOptions = {
            username: this.credentials.username,
            password: this.credentials.password,
            parser: restler_base_1.parsers.xml,
            xml2js: {
                explicitArray: false,
                mergeAttrs: true,
                attrValueProcessors: [processors_1.parseBooleans, processors_1.parseNumbers],
                valueProcessors: [processors_1.parseNumbers, processors_1.parseBooleans]
            }
        };
        this.nodesLoaded = false;
        this.protocol = config.useHttps === true ? 'https' : 'http';
        this.wsprotocol = 'ws';
        this.elkEnabled = (_b = config.elkEnabled) !== null && _b !== void 0 ? _b : false;
        this.debugLoggingEnabled = (_c = config.debugLoggingEnabled) !== null && _c !== void 0 ? _c : false;
        this.guardianTimer = null;
        if (this.elkEnabled) {
            this.elkAlarmPanel = new ElkAlarmPanelDevice_1.ELKAlarmPanelDevice(this, 1);
        }
    }
    emit(event, node) {
        return super.emit(event, node);
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    async callISY(url) {
        url = `${this.protocol}://${this.address}/rest/${url}/`;
        this.logger(`Sending request: ${url}`);
        try {
            const response = await Utils_1.getAsync(url, this.restlerOptions);
            if (this.checkForFailure(response)) {
                // this.logger(`Error calling ISY: ${JSON.stringify(response)}`);
                throw new Error(`Error calling ISY: ${JSON.stringify(response)}`);
            }
            else {
                return response;
            }
        }
        catch (e) {
            throw new Error(JSON.stringify(e));
        }
    }
    nodeChangedHandler(node, propertyName = null) {
        const that = this;
        if (this.nodesLoaded) {
            // this.logger(`Node: ${node.address} changed`);
            // if (this.changeCallback !== undefined && this.changeCallback !== null) {
            // t//his.changeCallback(that, node, propertyName);
            // }
        }
    }
    getElkAlarmPanel() {
        return this.elkAlarmPanel;
    }
    async loadNodes() {
        try {
            const result = await this.callISY('nodes');
            fs_1.writeFile(this.storagePath + '/ISYNodesDump.json', JSON.stringify(result), this.logger);
            await this.loadFolders(result).catch(p => this.logger.error('Error Loading Folders', p));
            await this.loadDevices(result).catch(p => this.logger.error('Error Loading Devices', p));
            await this.loadScenes(result).catch(p => this.logger.error('Error Loading Scenes', p));
        }
        catch (e) {
            throw new Error(`Error loading nodes: ${e.message}`);
        }
        return Promise.resolve();
    }
    async loadFolders(result) {
        var _a;
        this.logger('Loading Folders');
        if ((_a = result === null || result === void 0 ? void 0 : result.nodes) === null || _a === void 0 ? void 0 : _a.folder) {
            for (const folder of result.nodes.folder) {
                this.logger(`Loading: ${JSON.stringify(folder)}`);
                this.folderMap.set(folder.address, folder.name);
            }
        }
    }
    async loadScenes(result) {
        this.logger('Loading Scenes');
        for (const scene of result.nodes.group) {
            if (scene.name === 'ISY' || scene.name === 'Auto DR') {
                continue;
            } // Skip ISY & Auto DR Scenes
            const newScene = new ISYScene_1.ISYScene(this, scene);
            try {
                await newScene.refreshNotes();
            }
            catch (e) {
                this.logger('No notes found.');
            }
            this.sceneList.set(newScene.address, newScene);
        }
    }
    async loadDevices(obj) {
        this.logger('Loading Devices');
        for (const device of obj.nodes.node) {
            if (!this.deviceMap.has(device.pnode)) {
                const address = device.address;
                this.deviceMap[device.pnode] = {
                    address
                };
            }
            else {
                this.deviceMap[device.pnode].push(device.address);
            }
            let newDevice = null;
            // let deviceTypeInfo = this.isyTypeToTypeName(device.type, device.address);
            // this.logger(JSON.stringify(deviceTypeInfo));
            const enabled = Boolean(device.enabled);
            const d = DeviceFactory_1.DeviceFactory.getDeviceDetails(device);
            if (d.class) {
                newDevice = new d.class(this, device);
                newDevice.productName = d.name;
                newDevice.model = `(${d.modelNumber}) ${d.name} v.${d.version}`;
                newDevice.modelNumber = d.modelNumber;
                newDevice.version = d.version;
            }
            if (enabled) {
                if (newDevice === null) {
                    this.logger.warn(`Device type resolution failed for ${device.name} with type: ${device.type} and nodedef: ${device.nodeDefId}`);
                    newDevice = new ISYDevice_1.ISYDevice(this, device);
                }
                else if (newDevice !== null) {
                    if (d.unsupported) {
                        this.logger.warn('New device not supported: ' + JSON.stringify(device) + ' /n It has been mapped to: ' + d.class.name);
                    }
                    try {
                        await newDevice.refreshNotes();
                    }
                    catch (e) {
                        this.logger('No notes found.');
                    }
                    // if (!newDevice.hidden) {
                    // }
                    // this.deviceList.push(newDevice);
                }
                else {
                }
                this.deviceList.set(newDevice.address, newDevice);
            }
            else {
                this.logger(`Ignoring disabled device: ${device.name}`);
            }
        }
        this.logger(`Devices: ${this.deviceList.size} added.`);
    }
    loadElkNodes(result) {
        const document = new xmldoc_1.XmlDocument(result);
        const nodes = document
            .childNamed('areas')
            .childNamed('area')
            .childrenNamed('zone');
        for (let index = 0; index < nodes.length; index++) {
            const id = nodes[index].attr.id;
            const name = nodes[index].attr.name;
            const alarmDef = nodes[index].attr.alarmDef;
            const newDevice = new ElkAlarmSensorDevice_1.ElkAlarmSensorDevice(this, name, 1, id /*TODO: Handle CO Sensor vs. Door/Window Sensor */);
            this.zoneMap[newDevice.zone] = newDevice;
        }
    }
    loadElkInitialStatus(result) {
        const p = new xml2js_1.Parser({
            explicitArray: false,
            mergeAttrs: true
        });
        p.parseString(result, (err, res) => {
            if (err) {
                throw err;
            }
            for (const nodes of res.ae) {
                this.elkAlarmPanel.setFromAreaUpdate(nodes);
            }
            for (const nodes of res.ze) {
                const id = nodes.zone;
                const zoneDevice = this.zoneMap[id];
                if (zoneDevice !== null) {
                    zoneDevice.setFromZoneUpdate(nodes);
                    if (this.deviceList[zoneDevice.address] === null &&
                        zoneDevice.isPresent()) {
                        this.deviceList[zoneDevice.address] = zoneDevice;
                        // this.deviceIndex[zoneDevice.address] = zoneDevice;
                    }
                }
            }
        });
    }
    finishInitialize(success, initializeCompleted) {
        if (!this.nodesLoaded) {
            this.nodesLoaded = true;
            initializeCompleted();
            if (success) {
                if (this.elkEnabled) {
                    this.deviceList[this.elkAlarmPanel.address] = this.elkAlarmPanel;
                }
                this.guardianTimer = setInterval(this.guardian.bind(this), 60000);
                this.initializeWebSocket();
            }
        }
    }
    guardian() {
        const timeNow = new Date();
        if (Number(timeNow) - Number(this.lastActivity) > 60000) {
            this.logger('Guardian: Detected no activity in more then 60 seconds. Reinitializing web sockets');
            this.initializeWebSocket();
        }
    }
    variableChangedHandler(variable) {
        this.logger(`Variable:${variable.id} (${variable.type}) changed`);
    }
    checkForFailure(response) {
        return (response === null ||
            response instanceof Error ||
            response.RestResponse !== undefined && response.RestResponse.status !== 200);
    }
    async loadVariables(type) {
        const that = this;
        return this.callISY(`vars/definitions/${type}`).then((result) => that.createVariables(type, result))
            .then(() => that.callISY(`vars/get/${type}`)).then(that.setVariableValues.bind(that));
    }
    async loadConfig() {
        try {
            const result = await this.callISY('config');
            if (this.debugLoggingEnabled) {
                fs_1.writeFile(this.storagePath + '/ISYConfigDump.json', JSON.stringify(result), this.logger);
            }
            const controls = result.configuration.controls;
            this.model = result.configuration.deviceSpecs.model;
            this.serverVersion = result.configuration.app_version;
            // TODO: Check Installed Features
            // this.logger(result.configuration);
            if (controls !== undefined) {
                // this.logger(controls.control);
                // var arr = new Array(controls.control);
                for (const ctl of controls.control) {
                    // this.logger(ctl);
                    exports.Controls[ctl.name] = ctl;
                }
            }
        }
        catch (e) {
            throw Error(`Error Loading Config: ${e.message}`);
        }
    }
    getVariableList() {
        return this.variableList;
    }
    getVariable(type, id) {
        const key = this.createVariableKey(type, id);
        if (this.variableList.has(key)) {
            return this.variableList[key];
        }
        return null;
    }
    createVariableKey(type, id) {
        return `${type}:${id}`;
    }
    createVariables(type, result) {
        for (const variable of result.CList.e) {
            const id = Number(variable.id);
            const name = variable.name;
            const newVariable = new ISYVariable_1.ISYVariable(this, id, name, type);
            this.variableList.set(this.createVariableKey(type, id), newVariable);
        }
    }
    setVariableValues(result) {
        for (const vals of result.vars.var) {
            const type = Number(vals.type);
            const id = Number(vals.id);
            const variable = this.getVariable(type, id);
            if (variable) {
                variable.init = vals.init;
                variable.value = vals.val;
                variable.lastChanged = new Date(vals.ts);
            }
        }
    }
    async refreshStatuses() {
        try {
            const that = this;
            const result = await that.callISY('status');
            if (that.debugLoggingEnabled) {
                fs_1.writeFile(that.storagePath + '/ISYStatusDump.json', JSON.stringify(result), this.logger);
            }
            for (const node of result.nodes.node) {
                this.logger(node);
                let device = that.getDevice(node.id);
                if (device !== null && device !== undefined) {
                    let child = device.children.find(p => p.address === node.id);
                    if (child) {
                        //Case FanLinc where we treat the light as a child of the fan.
                        device = child;
                    }
                }
                if (Array.isArray(node.property)) {
                    for (let prop of node.property) {
                        device[prop.id] = device.convertFrom(prop.value, prop.uom);
                        device.formatted[prop.id] = prop.formatted;
                        device.uom[prop.id] = prop.uom;
                        device.logger(`Property ${exports.Controls[prop.id].label} (${prop.id}) initialized to: ${device[prop.id]} (${device.formatted[prop.id]})`);
                    }
                }
                else if (node.property) {
                    device[node.property.id] = device.convertFrom(node.property.value, node.property.uom);
                    device.formatted[node.property.id] = node.property.formatted;
                    device.uom[node.property.id] = node.property.uom;
                    device.logger(`Property ${exports.Controls[node.property.id].label} (${node.property.id}) initialized to: ${device[node.property.id]} (${device.formatted[node.property.id]})`);
                }
            }
        }
        catch (e) {
            throw new Error(`Error refreshing statuses: ${JSON.stringify(e)}`);
        }
    }
    async initialize(initializeCompleted) {
        const that = this;
        const options = {
            username: this.credentials.username,
            password: this.credentials.password
        };
        try {
            await this.loadConfig();
            await this.loadNodes();
            await this.loadVariables(ISYConstants_1.VariableType.Integer);
            await this.loadVariables(ISYConstants_1.VariableType.State);
            await this.refreshStatuses().then(() => {
                if (this.elkEnabled) {
                    restler_base_1.get(`${this.protocol}://${that.address}/rest/elk/get/topology`, options).on('complete', (result, response) => {
                        if (that.checkForFailure(response)) {
                            that.logger('Error loading from elk: ' + result.message);
                            throw new Error('Unable to contact the ELK to get the topology');
                        }
                        else {
                            that.loadElkNodes(result);
                            restler_base_1.get(`${that.protocol}://${that.address}/rest/elk/get/status`, options).on('complete', (result, response) => {
                                if (that.checkForFailure(response)) {
                                    that.logger(`Error:${result.message}`);
                                    throw new Error('Unable to get the status from the elk');
                                }
                                else {
                                    that.loadElkInitialStatus(result);
                                    that.finishInitialize(true, initializeCompleted);
                                }
                            });
                        }
                    });
                }
                else {
                    that.finishInitialize(true, initializeCompleted);
                }
            });
        }
        catch (e) {
            this.logger.error(`Error initializing ISY: ${JSON.stringify(e)}`);
        }
        finally {
            if (this.nodesLoaded !== true) {
                this.finishInitialize(true, initializeCompleted);
            }
        }
        return Promise.resolve(true);
    }
    async handleInitializeError(step, reason) {
        this.logger.error(`Error initializing ISY (${step}): ${JSON.stringify(reason)}`);
        return Promise.reject(reason);
    }
    handleWebSocketMessage(event) {
        this.lastActivity = new Date();
        parser.parseString(event.data, (err, res) => {
            var _a, _b;
            if (err) {
                throw err;
            }
            const evt = res.Event;
            if (evt === undefined || evt.control === undefined) {
                return;
            }
            let actionValue = 0;
            if (evt.action instanceof Object) {
                actionValue = evt.action._;
            }
            else if (evt.action instanceof Number || evt.action instanceof String) {
                actionValue = Number(evt.action);
            }
            const stringControl = Number((_a = evt.control) === null || _a === void 0 ? void 0 : _a.replace('_', ''));
            switch (stringControl) {
                case EventType_1.EventType.Elk:
                    if (actionValue === 2) {
                        this.elkAlarmPanel.handleEvent(event);
                    }
                    else if (actionValue === 3) {
                        const zeElement = evt.eventInfo.ze;
                        const zoneId = zeElement.zone;
                        const zoneDevice = this.zoneMap[zoneId];
                        if (zoneDevice !== null) {
                            if (zoneDevice.handleEvent(event)) {
                                this.nodeChangedHandler(zoneDevice);
                            }
                        }
                    }
                    break;
                case EventType_1.EventType.Trigger:
                    if (actionValue === 6) {
                        const varNode = evt.eventInfo.var;
                        const id = varNode.id;
                        const type = varNode.type;
                        (_b = this.getVariable(type, id)) === null || _b === void 0 ? void 0 : _b.handleEvent(evt);
                    }
                    break;
                case EventType_1.EventType.Heartbeat:
                    this.logger.debug(`Received ${EventType_1.EventType[Number(stringControl)]} Signal from ISY: ${JSON.stringify(evt)}`);
                    break;
                default:
                    if (evt.node !== '' && evt.node !== undefined && evt.node !== null) {
                        //
                        const impactedDevice = this.getDevice(evt.node);
                        if (impactedDevice !== undefined && impactedDevice !== null) {
                            impactedDevice.handleEvent(evt);
                        }
                        else {
                            this.logger.warn(`${EventType_1.EventType[stringControl]} Event for Unidentified Device: ${JSON.stringify(evt)}`);
                        }
                    }
                    else {
                        if (stringControl === EventType_1.EventType.NodeChanged) {
                            this.logger(`Received Node Change Event: ${JSON.stringify(evt)}. These are currently unsupported.`);
                        }
                        this.logger(`Unhandled ${EventType_1.EventType[Number(stringControl)]} Event: ${JSON.stringify(evt)}`);
                    }
                    break;
            }
        });
    }
    initializeWebSocket() {
        const that = this;
        const auth = `Basic ${new Buffer(`${this.credentials.username}:${this.credentials.password}`).toString('base64')}`;
        that.logger(`Connecting to: ${this.wsprotocol}://${this.address}/rest/subscribe`);
        this.webSocket = new faye_websocket_1.Client(`${this.wsprotocol}://${this.address}/rest/subscribe`, ['ISYSUB'], {
            headers: {
                Origin: 'com.universal-devices.websockets.isy',
                Authorization: auth
            },
            ping: 10
        });
        this.lastActivity = new Date();
        this.webSocket
            .on('message', (event) => {
            that.handleWebSocketMessage(event);
        })
            .on('error', (err, response) => {
            that.logger(`Websocket subscription error: ${err}`);
            /// throw new Error('Error calling ISY' + err);
        })
            .on('fail', (data, response) => {
            that.logger(`Websocket subscription failure: ${data}`);
            throw new Error('Failed calling ISY');
        })
            .on('abort', () => {
            that.logger('Websocket subscription aborted.');
            throw new Error('Call to ISY was aborted');
        })
            .on('timeout', (ms) => {
            that.logger(`Websocket subscription timed out after ${ms} milliseconds.`);
            throw new Error('Timeout contacting ISY');
        });
    }
    getDevice(address, parentsOnly = false) {
        let s = this.deviceList.get(address);
        if (!parentsOnly) {
            if (s === null) {
                s = this.deviceList[`${address.substr(0, address.length - 1)} 1`];
            }
        }
        else {
            while (s.parentAddress !== undefined &&
                s.parentAddress !== s.address &&
                s.parentAddress !== null) {
                s = this.deviceList[s.parentAddress];
            }
        }
        return s;
    }
    getScene(address) {
        return this.sceneList.get(address);
    }
    async sendISYCommand(path) {
        // const uriToUse = `${this.protocol}://${this.address}/rest/${path}`;
        this.logger(`Sending command...${path}`);
        return this.callISY(path);
    }
    async sendNodeCommand(node, command, ...parameters) {
        let uriToUse = `nodes/${node.address}/cmd/${command}`;
        if (parameters !== null &&
            parameters !== undefined &&
            parameters.length > 0) {
            uriToUse += `/${parameters.join('/')}`;
        }
        this.logger(`${node.name}: sending ${command} command: ${uriToUse}`);
        return this.callISY(uriToUse);
    }
    async sendGetVariable(id, type, handleResult) {
        const uriToUse = `${this.protocol}://${this.address}/rest/vars/get/${type}/${id}`;
        this.logger(`Sending ISY command...${uriToUse}`);
        return this.callISY(uriToUse).then((p) => handleResult(p.val, p.init));
    }
    async sendSetVariable(id, type, value, handleResult) {
        const uriToUse = `/rest/vars/set/${type}/${id}/${value}`;
        this.logger(`Sending ISY command...${uriToUse}`);
        return this.callISY(uriToUse);
    }
}
exports.ISY = ISY;

import { EventType } from './EventType.js';
export class ISYEvent<TAction, TEventType extends EventType> {
	action: TAction;
	eventInfo: any;
	constructor (eventData: any) {
		this.action = eventData.action;
		this.eventInfo = eventData.eventInfo;
	}
}

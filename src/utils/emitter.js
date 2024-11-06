import EventEmitter from "events";
// events :  được hỗ trợ từ node js
const _emitter = new EventEmitter();
_emitter.setMaxListeners(0); //unlimit listener

export const emitter = _emitter;

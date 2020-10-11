"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PadLock = void 0;
var PadLock = /** @class */ (function () {
    function PadLock(keyChain) {
        this._secrets = keyChain.secret;
    }
    PadLock.prototype.canUnlock = function (key) {
        return this._secrets[key.secret];
    };
    return PadLock;
}());
exports.PadLock = PadLock;

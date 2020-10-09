"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyChain = void 0;
var KeyChain = /** @class */ (function () {
    function KeyChain(keys) {
        this._keys = keys;
        this._secrets = this._keys.reduce(function (acc, item) {
            var secret = {};
            secret[item.secret] = true;
            return __assign(__assign({}, acc), secret);
        }, {});
    }
    Object.defineProperty(KeyChain.prototype, "secret", {
        get: function () {
            return this._secrets;
        },
        enumerable: false,
        configurable: true
    });
    return KeyChain;
}());
exports.KeyChain = KeyChain;

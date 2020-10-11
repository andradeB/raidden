"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var Key = /** @class */ (function () {
    function Key(secret) {
        this.secret = bcryptjs_1.default.hashSync(secret, 10);
    }
    return Key;
}());
exports.Key = Key;

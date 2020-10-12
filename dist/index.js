'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcrypt = require('bcryptjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var bcrypt__default = /*#__PURE__*/_interopDefaultLegacy(bcrypt);

class Key {
    constructor(secret) {
        this.secret = bcrypt__default['default'].hashSync(secret, 10);
    }
}

class KeyChain {
    constructor(keys) {
        this._keys = keys;
        this._secret = this._keys.reduce((acc, item) => {
            const secret = {};
            secret[item.secret] = true;
            return Object.assign(Object.assign({}, acc), secret);
        }, {});
    }
    get secret() {
        return this._secret;
    }
}

class PadLock {
    constructor(keyChain) {
        this._secrets = keyChain.secret;
    }
    canUnlock(key) {
        return this._secrets[key.secret];
    }
}

exports.Key = Key;
exports.KeyChain = KeyChain;
exports.PadLock = PadLock;
//# sourceMappingURL=index.js.map

import bcrypt from 'bcryptjs';

class Key {
    constructor(secret) {
        this.secret = bcrypt.hashSync(secret, 10);
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

export { Key, KeyChain, PadLock };
//# sourceMappingURL=index.es.js.map

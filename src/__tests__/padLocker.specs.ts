import {
    Key,
    PadLock,
    KeyChain
} from "../Core";

jest.mock('bcryptjs');

describe('Testing core structure', ()=> {
    it('secret must be different of base key', () => {
        const baseKey = "dorOne";
        const dorOne = new Key(baseKey);

        expect(dorOne.secret).not.toBe(dorOne)
    })

    it('canUnlock must return true to right key, and false to wrong key', () => {
        const key1 = new Key("key1");
        const key2 = new Key("key2");
        const key3 = new Key("key3");

        const keyChain = new KeyChain([key1,key2])
        const padLock = new PadLock(keyChain);

        expect(padLock.canUnlock(key1)).toBeTruthy();
        expect(padLock.canUnlock(key2)).toBeTruthy()
        expect(padLock.canUnlock(key3)).toBeFalsy()
    })
})

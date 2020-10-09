import { IKey, IKeyChain, IPadLock, ISecretKeyChain } from "../Interface";
export declare abstract class PadLock implements IPadLock {
    protected _secrets: ISecretKeyChain;
    constructor(keyChain: IKeyChain);
    canUnlock(key: IKey): boolean;
}

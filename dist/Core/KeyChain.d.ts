import { IKeyChain, ISecretKeyChain } from '../Interface';
import { Key } from './Key';
export declare class KeyChain implements IKeyChain {
    protected _keys: Key[];
    protected _secret: ISecretKeyChain;
    constructor(keys: Key[]);
    get secret(): ISecretKeyChain;
}

import { IKeyChain, ISecretKeyChain } from "../Interface";
import { Key } from "./Key";
export declare class KeyChain implements IKeyChain {
    protected _keys: Array<Key>;
    protected _secrets: ISecretKeyChain;
    constructor(keys: Array<Key>);
    get secret(): ISecretKeyChain;
}

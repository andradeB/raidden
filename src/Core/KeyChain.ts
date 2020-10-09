import { IKeyChain, ISecretKeyChain } from '../Interface';
import { Key } from './Key';

export class KeyChain implements IKeyChain {
  protected _keys: Key[];
  protected _secret: ISecretKeyChain;

  constructor(keys: Key[]) {
    this._keys = keys;
    this._secret = this._keys.reduce((acc, item) => {
      const secret: ISecretKeyChain = {};
      secret[item.secret] = true;

      return { ...acc, ...secret };
    }, {});
  }

  get secret(): ISecretKeyChain {
    return this._secret;
  }
}

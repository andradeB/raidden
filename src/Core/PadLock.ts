import { IKey, IKeyChain, IPadLock, ISecretKeyChain } from '../Interface';

export abstract class PadLock implements IPadLock {
  protected _secrets: ISecretKeyChain;

  constructor(keyChain: IKeyChain) {
    this._secrets = keyChain.secret;
  }

  canUnlock(key: IKey): boolean {
    return this._secrets[key.secret];
  }
}

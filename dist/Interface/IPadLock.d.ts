import { IKey } from "./IKey";
export interface IPadLock {
    canUnlock(key: IKey): boolean;
}

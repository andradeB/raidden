# Raidden
[![npm version](https://img.shields.io/badge/dynamic/json?color=success&label=Raidden&prefix=v.&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FandradeB%2Fraidden%2Fmaster%2Fpackage.json)](https://badge.fury.io/js/raidden)  
>   Sometimes a lock is enough!

A bunker is not always necessary to control access, or to hide content. A padlock can be much more practical and simple to use.

Raidden was made with this idea, being simple, light, and easy to use.

## Installation  
```bash  
npm install raidden
```  
or
```bash  
yarn add raidden  
```  
  
## How to use  
  

 1. Create Keys
 2. Create a Keychain
 3. Create a Padlock
  
```javascript  
import { KeyChain, Key, PadLock } from 'raidden';  
  
const adminKey = new Key("my-secret-admin-string-key");  
const userKey = new Key("my-user-string-key");  
const anonKey = new Key("my-anon-string-key");  
  
const loggedInKeychain = new KeyChain([adminKey, userKey]);  
const loggedInPadlock = new PadLock(loggedInKeychain);
```

 4. Use key to check
 
 ```javascript  
loggedInPadlock.canUnlock(adminKey);  
// true  
  
loggedInPadlock.canUnlock(userKey);  
// true  
  
loggedInPadlock.canUnlock(anonKey);  
// false
```



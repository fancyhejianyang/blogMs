import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import { STORAGE_PREFIX, STORAGE_SECRET } from 'src/environments/environment';
import { AUTH_TOKEN } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  removeItem(item: string) {
    window.localStorage.removeItem(STORAGE_PREFIX + item);
  }
  getItem(key: string, decode?: boolean): string {
    let value = window.localStorage.getItem(STORAGE_PREFIX + key);
    if (value && decode) {
      try {
        value = AES.decrypt(value, STORAGE_SECRET).toString(enc.Utf8);
      } catch (error) {
        value = null;
      }
    }
    return value;
  }
  setItem(key: string, value: string, encode?: boolean) {
    let val = value;
    if (val && encode) {
      try {
        val = AES.encrypt(value, STORAGE_SECRET).toString(enc.utf8)
      } catch (err) {
        val = null;
      }
    }
    if (val) {
      window.localStorage.setItem(STORAGE_PREFIX + key, val);
    }
  }
}

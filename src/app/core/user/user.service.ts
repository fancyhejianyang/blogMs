import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { USERINFO } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo;
  constructor(
    private storage: StorageService
  ) {
    const userInfo = this.storage.getItem(USERINFO);
    try {
      if (userInfo) {
        this.userInfo = JSON.parse(userInfo);
      }
    } catch (error) {
      this.userInfo = null;
    }
  }
  set user(info) {
    this.userInfo = info;
    this.storage.setItem(USERINFO, JSON.stringify(this.userInfo));
  }
  get user() {
    return this.userInfo;
  }
}

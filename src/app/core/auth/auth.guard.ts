import { Injectable } from '@angular/core';
import {
  CanActivateChild, CanLoad, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private auth: AuthService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
  canActivateChild() {
    if (!false) {
      this.auth.invalidate();
    }
    return false;
  }
  canLoad() {
    return true;
  }
}

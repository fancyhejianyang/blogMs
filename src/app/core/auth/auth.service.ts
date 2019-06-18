import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AUTH_TOKEN } from '../../../environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private storage: StorageService,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) { }

  get loggedIn(): boolean {
    return !!this.token && !!this.userService.user;
  }
  get isAuthenticated(): boolean {
    return !!this.storage.getItem(AUTH_TOKEN) && !!this.storage.getItem('m_blog_info');
  }
  get token(): string {
    let result = this.storage.getItem(AUTH_TOKEN) as any;
    try {
      result = JSON.parse(result);
    } catch (error) {
      result = null;
    }
    if (result && result['expires'] > Date.now()) {
      return result;
    }
  }
  invalidate(): void {
    this.storage.removeItem(AUTH_TOKEN);
    this.router.navigateByUrl('/login');
  }
}

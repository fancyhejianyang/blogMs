import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AUTH_TOKEN } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private storage: StorageService,
    private router: Router,
    private http: HttpClient
  ) { }

  // get isAuthenticated(): boolean {
  //   return !!this.storage.getItem(AUTH_TOKEN) && !!this.storage.getItem('userinfo');
  // }
  invalidate(): void {
    this.storage.removeItem(AUTH_TOKEN);
    this.router.navigateByUrl('/login');
  }
}

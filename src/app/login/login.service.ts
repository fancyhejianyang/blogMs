import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AUTH_TOKEN } from '../../environments/environment';
import { StorageService } from '../core/storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  login(url: string, user: User): Observable<any> {
    return this.http.post(`${environment.SERVER_URL}/${url}`, {
      params: {
        ...user
      }
    }).pipe(
      tap((res: any) => {
        if (res.loginInfo) {
          this.storageToken(res.loginInfo[AUTH_TOKEN]);
        }
      })
    );
  }
  private storageToken(token: string) {
    if (!token) {
      return;
    }
    const obj = {
      value: token,
      expires: Date.now() + (12 * 60 * 60 * 1000)
    };
    this.storage.setItem(AUTH_TOKEN, JSON.stringify(obj));
  }
}

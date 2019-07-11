import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { AUTH_TOKEN } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: StorageService,
    private router: Router
  ) { }
  private handleData(event: HttpResponse<any>): Observable<any> {
    console.log(event);
    alert(event.status);
    if (event.status === 401) {
      this.localStorage.removeItem(AUTH_TOKEN);
      this.router.navigateByUrl('/');
      return of(event);
    }
    return throwError(event);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.localStorage.getItem(AUTH_TOKEN);
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      })
    }
    return next.handle(request).pipe(
      tap((res: HttpResponse<any>) => {
        this.handleData(res);
      }),
      catchError(err => { return of(err) })
    );
  }
}
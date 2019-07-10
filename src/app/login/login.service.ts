import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AUTH_TOKEN } from '../../environments/environment';
import { StorageService } from '../core/storage.service';
import { UserService } from '../core/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  returnCitySN:any = window.returnCitySN;
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private userService: UserService
  ) { }

  login(url: string, user: User): Observable<any> {
    return this.http.post(`${environment.SERVER_URL}/${url}`, {
      params: {
        ...user,
        ip:this.returnCitySN["cip"],
        city:this.returnCitySN["cname"]
      }
    }).pipe(
      tap((res: any) => {
        console.log('res', res);
        if (res.loginInfo) {
          this.storageToken(res.loginInfo[AUTH_TOKEN]);
          // 设置userinfo
          const obj = { userName: res.loginInfo['userName'] };
          this.userService.user = obj;
        }
      })
    );
  }
  regist(url:string,user:User):Observable<any>{
    return this.http.post(`${environment.SERVER_URL}/${url}`,{
      params:{
        ...user,
        ip:this.returnCitySN["cip"],
        city:this.returnCitySN["cname"]
      }
    }).pipe(
      tap((res:any)=>{
        console.log(res);
      })
    )

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

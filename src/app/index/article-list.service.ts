import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(
    private http: HttpClient
  ) { }

  getArticleList(arcType = 'all', pIndex = '1'): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/getArcticlesByType`, {
      headers: {
        header: 'Content-Type'
      },
      observe: 'body',
      params: {
        pageSize: '5',
        pageIndex: pIndex,
        type: arcType
      },
      responseType: 'json'
    });
  }
}

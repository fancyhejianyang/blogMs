import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
interface D {
  title?: string;
  prefix?: string;
  usePrefix?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  appPrefix: string;
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // 获取的是index.html 默认指定的根站点名称
    this.appPrefix = this.titleService.getTitle();
  }
  init() {
    this.handleTitle();
  }
  setTitle(title: string) {
    if (title) {
      this.titleService.setTitle(title);
    } else {
      this.titleService.setTitle('');
    }
  }
  getTitle() { }
  private titleFix(data: D) {
    if (!data.usePrefix) {
      data.title = data.title ? `_${data.title}` : '';
      return `${this.appPrefix}${data.title}`;
    } else {
      return `${data.title}`;
    }
  }
  private handleTitle(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          return this.activatedRoute;
        }),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      ).subscribe(data => {
        this.setTitle(this.titleFix(data));
      });
  }
}

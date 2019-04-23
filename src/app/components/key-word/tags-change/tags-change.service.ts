import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsChangeService {

  constructor() { }
  private tagsResour = new Subject<any>();

  tagResour$ = this.tagsResour.asObservable();

  tagsChange(tags: Array<{}>) {
    this.tagsResour.next(tags);
  }
}

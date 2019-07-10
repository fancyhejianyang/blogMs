import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../core/storage.service';
import { USERINFO } from '../../environments/environment';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  minHeight: string;
  userInfo = {};
  constructor(
    private storage: StorageService
  ) {
    this.minHeight = window.innerHeight - 60 + 'px';
  }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userInfo = JSON.parse(this.storage.getItem(USERINFO));
  }
  logout(){
    // this.
  }
}

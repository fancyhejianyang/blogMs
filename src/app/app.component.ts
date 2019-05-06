import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TitleService } from './core/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogMs';
  constructor(private titleService: TitleService) {
  }
  ngOnInit() {
    this.titleService.init();
  }
}

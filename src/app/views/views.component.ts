import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  minHeight: string;
  constructor() {
    this.minHeight = window.innerHeight - 60 + 'px';
  }

  ngOnInit() {
  }

}

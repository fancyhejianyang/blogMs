import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  minHeight: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.minHeight = window.innerHeight - 60 + 'px';
  }

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      console.log(data);
    });
  }

}

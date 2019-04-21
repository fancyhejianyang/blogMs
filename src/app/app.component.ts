import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogMs';
  private router: Router;
  // private activeRouter: ActivatedRoute;
  constructor(private router: Router) {
    this.router = router;
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof ActivationEnd) {
        console.log(event);
      }
    });
  }
  ngOnInit() {
  }
  watchMessage() {
    console.log('message');
  }
  showMaterial(e: MouseEvent) {
    e.preventDefault();
    e.cancelBubble = true;
    console.log('material');
  }
}

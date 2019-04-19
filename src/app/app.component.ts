import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogMs';
  watchMessage(){
    console.log('message');
  }
  showMaterial(e:MouseEvent){
    e.preventDefault();
    e.cancelBubble = true;
    console.log('material');
  }
}

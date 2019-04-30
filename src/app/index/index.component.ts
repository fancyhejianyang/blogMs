import { Component, OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  arcList = [];
  test: any = { age: 1 };
  constructor(
    private arcListServe: ArticleListService
  ) { }

  ngOnInit() {
    this.arcListServe.getArticleList().subscribe(res => {
      console.log(res);
      this.arcList = res.data;
      this.test = { name: 'test' }
    });
  }
  changeTest(){
    this.test = {age:111};
  }
}

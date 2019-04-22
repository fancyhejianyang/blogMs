import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { IndexComponent } from '../index/index.component';
import { ArticlePostComponent } from '../components/article-post/article-post.component';
const viewRoutes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent,
        data: { title: '文章管理' }
      },
      {
        path: 'arc_post',
        component: ArticlePostComponent,
        data: { title: '文章发布' }
      }
    ]
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule, RouterModule.forChild(viewRoutes)
  ]
})
export class ViewRoutingModule { }

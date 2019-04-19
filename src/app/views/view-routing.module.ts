import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { IndexComponent } from '../index/index.component';
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
        component: IndexComponent
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

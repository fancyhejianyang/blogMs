import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ViewRoutingModule } from './view-routing.module';
import { IndexComponent } from '../index/index.component';
import { ViewsComponent } from './views.component';

@NgModule({
  declarations: [ViewsComponent, IndexComponent],
  imports: [
    CommonModule, NgZorroAntdModule, ViewRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class ViewsModule { }

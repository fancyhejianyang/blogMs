import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ViewRoutingModule } from './view-routing.module';
import { IndexComponent } from '../index/index.component';
import { ViewsComponent } from './views.component';
import { ArticlePostComponent } from '../components/article-post/article-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule } from 'ng2-froala-editor/ng2-froala-editor';
import { KeyWordComponent } from '../components/key-word/key-word.component';

@NgModule({
  declarations: [ViewsComponent, IndexComponent, ArticlePostComponent, KeyWordComponent],
  imports: [
    CommonModule, NgZorroAntdModule, ViewRoutingModule, FormsModule, FroalaEditorModule, ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class ViewsModule { }

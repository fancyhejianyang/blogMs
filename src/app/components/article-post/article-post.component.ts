import { Component, OnInit } from '@angular/core';
// import E from 'wangeditor';
import { FroalaEditorComponent } from 'ng2-froala-editor/ng2-froala-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
// import cloneDeep from 'lodash';
const cloneDeep = require('clone-deep');
import { TagsChangeService } from '../key-word/tags-change/tags-change.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  tags;
  selectedTag = [];
  allTags: Array<{ label: string, id: number, selected?: boolean }>;
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalServe: NzModalService,
    private tagsChange: TagsChangeService
    // private articleListServe: ArticleListService
  ) {
  }
  modalTemplate: NzModalRef;
  articleForm = new FormGroup({
    arc_title: new FormControl('', [Validators.required]),
    type: new FormControl('frame', [Validators.required]),
    arc_orginal: new FormControl('0', [Validators.required]),
    tags: new FormControl([], [Validators.required]),
    content: new FormControl('', [Validators.required]),
    originLink: new FormControl(''),
    // allTags: new FormControl(cloneDeep(this.allTags).__wrapped__),
    summary: new FormControl('', [Validators.required])
  });
  _type: string;
  types = [
    {
      id: 0,
      value: '框架学习',
      url: 'frame'
    },
    {
      id: 1,
      value: 'Nodejs',
      url: 'nodejs'
    },
    {
      id: 2,
      value: '实用前端',
      url: 'practicial'
    },
    {
      id: 3,
      value: '生活随笔',
      url: 'other'
    }
  ];
  text = '<div>现在您可以编辑了...</div>';
  editor: any;

  froalaOptions: any = {
    shortcutsEnabled: [
      'show', 'bold', 'italic', 'underline', 'strikeThrough', 'indent', 'outdent', 'undo', 'redo', 'insertImage',
      'createLink', 'html'],
    height: 600
  };
  ngOnInit() {
    this.tagsChange.tagResour$.subscribe(res => {
      this.allTags = res;
      console.log(this.allTags);
    });
  }
  post(e) {
    e.stopPropagation();
    // console.log(this.articleForm);
    if (this.articleForm.valid) {
      const params = this.articleForm.value;
      this.http.post(`${environment.SERVER_URL}/blog`,
        {
          headers: {
            header: 'Content-Type'
          },
          observe: 'body',
          params: {
            ...params
          },
          responseType: 'json',
          // withCredentials: true
        }).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('/index');
        });
    }
  }
  onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.text = event;
    });
  }

  onEditorInitialized(event?: any) {
    this.editor = FroalaEditorComponent.getFroalaInstance();
    this.editor.on('froalaEditor.focus', (e, editor) => {
    });
    this.editor.on('froalaEditor.blur', (e, editor) => {
      this.articleForm.patchValue({
        content: e.target.value
      });
    });
  }
  optionChange(e) {
    this._type = this.types.filter(o => o.value === e.target.value)[0].url;
    this.articleForm.patchValue({
      type: this._type
    });
  }
  showTagsModal(mContent) {
    this.modalTemplate = this.modalServe.create({
      nzTitle: 'tplTitle',
      nzContent: mContent,
      // nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: false,
      nzOnOk: () => this.addItem(),
      nzOnCancel: () => this.cancel()
    });
  }
  tagsTostring() {
    let s = '';
    this.selectedTag.map((item) => {
      if (item.checked) {
        s += item.label + '，';
      }
      return this.selectedTag;
    });
    this.articleForm.patchValue({
      tags: s.slice(0, s.length - 1)
    });
    this.tags = this.articleForm.value.tags;
  }
  addItem() {
    this.selectedTag = cloneDeep(this.allTags);
    this.tagsTostring();
  }
  cancel() {
    console.log(this.selectedTag);
  }
  cancelPublish() {
    this.router.navigateByUrl('view');
  }
  editClick(event) {
    // event.stopPropagation();
  }

}

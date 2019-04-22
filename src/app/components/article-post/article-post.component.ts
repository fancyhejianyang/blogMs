import { Component, OnInit } from '@angular/core';
// import E from 'wangeditor';
import { FroalaEditorComponent } from 'ng2-froala-editor/ng2-froala-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import cloneDeep from 'lodash';
@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalServe: NzModalService
    // private articleListServe: ArticleListService
  ) { }
  modalTemplate: NzModalRef;
  tags = [];
  selectedTag = [];
  allTags: Array<{ label: string, id: number, selected?: boolean }> = [
    { label: 'HTML', id: 0 },
    { label: 'CSS', id: 1 },
    { label: 'Javascript', id: 2 },
    { label: 'Angular', id: 3 },
    { label: 'React', id: 4 },
    { label: '移动端兼容', id: 5 },
    { label: 'Jquery', id: 6 },
    { label: 'ES系列', id: 7 },
    { label: 'Typescript', id: 8 },
    { label: 'webpack', id: 9 },
    { label: 'gulp', id: 10 },
    { label: 'Nodejs', id: 11 },
    { label: '服务端知识', id: 12 }
  ];
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
    height: 900
  };
  tagModal = false;
  ngOnInit() {
    // this.articleListServe.arc_type_update('edit');
  }
  post(e) {
    e.stopPropagation();
    console.log(this.articleForm);
    if (this.articleForm.valid) {
      const params = this.articleForm.value;
      this.http.post('http://127.0.0.1:8081/blog',
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
          this.router.navigateByUrl('/view?type=' + this.articleForm.value.type);
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
      this.tagModal = false;
    });
    this.editor.on('froalaEditor.blur', (e, editor) => {
      console.log('editor is blur');
      console.log(e.target.value);
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
    // e.stopPropagation();
    console.log(this.allTags);
    if (this.selectedTag.length > 0) {
      console.log(this.selectedTag);
      this.articleForm.patchValue({
        allTags: cloneDeep(this.selectedTag).__wrapped__
      });
    }
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
  allTagsUpdate() {
    let s = '';
    this.selectedTag.map((item) => {
      if (item.checked) {
        s += item.label + ',';
      }
      return this.selectedTag;
    });
    this.articleForm.patchValue({
      tags: s.slice(0, s.length - 1)
    });
  }
  addItem() {
    this.selectedTag = cloneDeep(this.articleForm.value.allTags).__wrapped__;
    this.allTagsUpdate();
  }
  cancel() {
    console.log(this.selectedTag);
  }
  selectLabel(options: Array<{ label: string; value: string; checked: boolean }>) {

  }
  cancelPublish() {
    this.router.navigateByUrl('view');
  }
  editClick(event) {
    // event.stopPropagation();
    this.tagModal = false;
  }

}

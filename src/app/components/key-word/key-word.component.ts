import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TagsChangeService } from './tags-change/tags-change.service';
// import cloneDeep from 'lodash';
import cloneDeep from 'clone-deep';

@Component({
  selector: 'app-key-word',
  templateUrl: './key-word.component.html',
  styleUrls: ['./key-word.component.scss']
})
export class KeyWordComponent implements OnInit, OnChanges {
  @Input() selectedTags;
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
  constructor(
    private tagsChange: TagsChangeService
  ) {
  }

  ngOnInit() {
    if (this.selectedTags.length > 0) {
      this.allTags = cloneDeep(this.selectedTags);
      console.log(this.allTags);
    }
  }
  ngOnChanges(changes): void {
    console.log(changes);
  }
  selectLabel() {
    this.tagsChange.tagsChange(this.allTags);
    console.log(this.selectedTags);
  }

}

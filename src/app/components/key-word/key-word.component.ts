import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-key-word',
  templateUrl: './key-word.component.html',
  styleUrls: ['./key-word.component.scss']
})
export class KeyWordComponent implements OnInit, OnChanges {
  @Input() selectedTags: [];
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
  constructor() {
  }

  ngOnInit() {
    console.log(this.selectedTags);
  }
  ngOnChanges(changes): void {
    console.log(changes);
  }
  selectLabel(e) {
    console.log(e);
  }

}

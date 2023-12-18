import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TabContents } from "./tab-contents.type";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent implements OnInit {
  @Input() items: TabContents[] = [];
  protected title: string = "";
  protected content: string = "";


  constructor() { }

  ngOnInit(): void {
    if (this.items.length > 0) {
      this.title = this.items[0].TabTitle ?? "";
      this.content = this.items[0].Contents ?? "";
    }
  }

  handleIndex(index: number) {
    if (this.items.length > 0) {
      this.title = this.items[index].TabTitle ?? "";
      this.content = this.items[index].Contents ?? "";
    }
  }
}

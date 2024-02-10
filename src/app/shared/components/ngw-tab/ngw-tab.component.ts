import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgwTabContents } from './ngw-tab-contents.type';
import { NgFor, NgIf } from '@angular/common';
import { NgwTabModule } from './directives/ngw-tab.module';

@Component({
  selector: 'ngw-tab',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgwTabModule
  ],
  templateUrl: './ngw-tab.component.html',
  styleUrl: './ngw-tab.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NgwTabComponent {
  @Input() items: NgwTabContents[] = [];
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

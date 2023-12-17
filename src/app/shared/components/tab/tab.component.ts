import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TabContents} from "./tab-contents.type";

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
      CommonModule
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() items: TabContents[] = [];
}

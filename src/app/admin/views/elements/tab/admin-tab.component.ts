import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {pageTransition} from "../../../../shared/utils/animations";
import {TabComponent} from "../../../../shared/components/tab/tab.component";
import {TabContents} from "../../../../shared/components/tab/tab-contents.type";
import {tabItems} from "./tab-items";

@Component({
  selector: 'admin-tab',
  standalone: true,
  imports: [
      CommonModule,
      TabComponent
  ],
  templateUrl: './admin-tab.component.html',
  styleUrl: './admin-tab.component.css',
  animations: [pageTransition],
})
export class AdminTabComponent {
    items: TabContents[] = tabItems;
}

import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { pageTransition } from "../../../../shared/utils/animations";
import { TabContents } from "../../../../shared/components/tab/tab-contents.type";
import { tabItems } from "./tab-items";
import { TabModule } from 'src/app/shared/components/tab/tab.module';

@Component({
  selector: 'admin-tab',
  standalone: true,
  imports: [
    CommonModule,
    TabModule
  ],
  templateUrl: './admin-tab.component.html',
  styleUrl: './admin-tab.component.css',
  animations: [pageTransition],
})
export class AdminTabComponent {
  items: TabContents[] = tabItems;
}

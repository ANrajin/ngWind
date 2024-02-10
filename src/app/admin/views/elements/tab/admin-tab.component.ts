import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { pageTransition } from "../../../../shared/utils/animations";
import { tabItems } from "./tab-items";
import { NgwTabComponent } from 'src/app/shared/components/ngw-tab/ngw-tab.component';
import { NgwTabContents } from 'src/app/shared/components/ngw-tab/ngw-tab-contents.type';

@Component({
  selector: 'admin-tab',
  standalone: true,
  imports: [
    CommonModule,
    NgwTabComponent
  ],
  templateUrl: './admin-tab.component.html',
  styleUrl: './admin-tab.component.css',
  animations: [pageTransition],
})
export class AdminTabComponent {
  items: NgwTabContents[] = tabItems;
}

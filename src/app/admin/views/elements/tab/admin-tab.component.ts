import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { NgwTabModule } from 'src/app/shared/components/ngw-tab/directives/ngw-tab.module';
import { NgwTabContents } from 'src/app/shared/components/ngw-tab/ngw-tab-contents.type';
import { NgwTabComponent } from 'src/app/shared/components/ngw-tab/ngw-tab.component';
import { pageTransition } from "../../../../shared/utils/animations";
import { tabItems } from "./tab-items";

@Component({
  selector: 'admin-tab',
  standalone: true,
  imports: [
    CommonModule,
    NgwTabComponent,
    NgwTabModule
  ],
  templateUrl: './admin-tab.component.html',
  styleUrl: './admin-tab.component.css',
  animations: [pageTransition],
})
export class AdminTabComponent {
  items: NgwTabContents[] = tabItems;
}

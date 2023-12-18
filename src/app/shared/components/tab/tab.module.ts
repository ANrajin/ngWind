import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from './directives/tab.directive';
import { TabItemDirective } from './directives/tab-item.directive';
import { TabLinkDirective } from './directives/tab-link.directive';
import { TabContentDirective } from './directives/tab-content.directive';
import { TabComponent } from './tab.component';



@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    CommonModule,
    TabDirective,
    TabItemDirective,
    TabLinkDirective,
    TabContentDirective
  ],
  exports: [
    TabComponent,
    TabDirective,
    TabItemDirective,
    TabLinkDirective,
    TabContentDirective
  ]
})
export class TabModule { }

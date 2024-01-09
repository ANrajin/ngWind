import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwTabDirective } from './ngw-tab.directive';
import { NgwTabItemDirective } from './ngw-tab-item.directive';
import { NgwTabLinkDirective } from './ngw-tab-link.directive';
import { NgwTabContentDirective } from './ngw-tab-content.directive';
import { NgwTabTitleDirective } from './ngw-tab-title.directive';
import { NgwTabBodyDirective } from './ngw-tab-body.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgwTabDirective,
    NgwTabItemDirective,
    NgwTabLinkDirective,
    NgwTabContentDirective,
    NgwTabTitleDirective,
    NgwTabBodyDirective
  ],
  exports: [
    NgwTabDirective,
    NgwTabItemDirective,
    NgwTabLinkDirective,
    NgwTabContentDirective,
    NgwTabTitleDirective,
    NgwTabBodyDirective
  ]
})
export class NgwTabModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from './nav.directive';
import { NavItems } from './nav-items.directive';
import { NavLink } from './nav-link.directive';
import { NavContent } from './nav-content.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Nav,
    NavItems,
    NavLink,
    NavContent
  ],
  exports: [
    Nav,
    NavItems,
    NavLink,
    NavContent
  ]
})
export class AppNavModule { }

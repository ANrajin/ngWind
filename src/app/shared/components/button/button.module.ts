import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppBtnBlueDirective } from './directives/app-btn-blue.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppBtnBlueDirective],
  exports: [AppBtnBlueDirective],
})
export class ButtonModule {}

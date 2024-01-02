import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionButton } from './directives/accordion-button.directive';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, AccordionButton],
  exports: [AccordionComponent, AccordionButton],
})
export class AccordionModule {}

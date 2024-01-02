import { Component, Input } from '@angular/core';
import { AccordionContent } from './accordion-types';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() items: AccordionContent[] = [];

  isCollapse(){
    
  }

}

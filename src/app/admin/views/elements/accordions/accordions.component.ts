import { Component } from '@angular/core';
import { AccordionContent } from 'src/app/shared/components/accordion/accordion-types';
import { AccordionModule } from 'src/app/shared/components/accordion/accordion.module';
import { accordionItems } from './accordion-items';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.css',
})
export class AccordionsComponent {
  public  items: AccordionContent[] = accordionItems;
}

import { Component } from '@angular/core';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.component';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.css'
})
export class AccordionsComponent {

}

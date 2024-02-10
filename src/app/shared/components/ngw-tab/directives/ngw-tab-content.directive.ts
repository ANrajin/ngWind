import { Directive } from '@angular/core';

@Directive({
  selector: '[ngwTabContent]',
  standalone: true,
  host: {
    class: 'ngw-tab-content'
  }
})
export class NgwTabContentDirective { }

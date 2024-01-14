import { Directive } from '@angular/core';

@Directive({
  selector: '[ngwTabTitle]',
  standalone: true,
  host: {
    class: 'ngw-tab-title'
  }
})
export class NgwTabTitleDirective { }

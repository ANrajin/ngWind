import { Directive } from '@angular/core';

@Directive({
  selector: '[ngwTab]',
  standalone: true,
  host: {
    class: 'ngw-tab-hr ngw-tab-container'
  }
})
export class NgwTabDirective { }

import { Directive } from '@angular/core';

@Directive({
  selector: '[ngwTabBody]',
  standalone: true,
  host: {
    class: 'ngw-tab-body'
  }
})
export class NgwTabBodyDirective { }

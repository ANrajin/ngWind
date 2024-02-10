import { Directive } from '@angular/core';

@Directive({
  selector: '[ngwTabItem]',
  standalone: true,
  host: {
    class: "ngw-tab-item"
  }
})
export class NgwTabItemDirective { }

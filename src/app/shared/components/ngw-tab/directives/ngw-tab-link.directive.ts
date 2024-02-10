import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngwTabLink]',
  standalone: true,
  host: {
    class: 'ngw-tab-link'
  }
})
export class NgwTabLinkDirective {
  @Output() index: EventEmitter<number> = new EventEmitter<number>();

  @HostListener('click', ['$event.target']) onClick(elem: Element) {
    const current = elem.closest('ul')?.querySelector('[aria-current=true]') as HTMLElement;
    current.setAttribute('aria-current', 'false');
    elem.setAttribute('aria-current', 'true');
    this.index.emit(Number(elem.getAttribute('aria-valuenow')));
  }

}

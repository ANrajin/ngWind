import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sidebarCollapse]',
  standalone: true,
})
export class SidebarCollapseDirective {
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    const elem = this.elementRef.nativeElement as HTMLElement;
    const sidebar = elem.closest('.sidebar');
    const sidebarIsCollapsed = sidebar?.getAttribute('aria-expanded');

    if (sidebarIsCollapsed === 'false') {
      elem.closest('.sidebar')?.setAttribute('aria-expanded', 'true');
    }
    else {
      sidebar?.setAttribute('aria-expanded', 'false');
    }

    const subMenu = sidebar?.querySelectorAll('.sub-menu');

    subMenu?.forEach((subMenu: Element) => {
      if (subMenu.getAttribute('aria-expanded') == 'true')
        subMenu.setAttribute('aria-expanded', 'false');

      subMenu.toggleAttribute('icon-hidden');
    });

  }
}

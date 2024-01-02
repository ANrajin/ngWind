import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[accordionButton]',
  standalone: true,
})
export class AccordionButton implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Output() collapse: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'accordion-button');
  }

  isCollapse: boolean = false;

  @HostListener('click', ['$event.target']) onClick(elem: Element) {
    const current = elem
      .closest('h2')
      ?.querySelector('[aria-expanded= true]') as HTMLElement | null;
    if (current) {
      current.setAttribute('aria-expanded', 'false');
    } else {
      elem.setAttribute('aria-expanded', 'true');
    }
     this.isCollapse = !this.isCollapse;
     this.collapse.emit(this.isCollapse);
     console.log(this.collapse);
    
  }
}

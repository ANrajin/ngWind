import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTabItem]',
  standalone: true
})
export class TabItemDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'nav-item');
  }

}

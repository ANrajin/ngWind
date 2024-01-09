import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngwTabTitle]',
  standalone: true
})
export class NgwTabTitleDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'ngw-tab-title')
  }
}

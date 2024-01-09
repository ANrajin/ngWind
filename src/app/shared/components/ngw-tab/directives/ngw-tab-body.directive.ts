import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngwTabBody]',
  standalone: true
})
export class NgwTabBodyDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'ngw-tab-body')
  }
}

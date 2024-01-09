import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngwTab]',
  standalone: true
})
export class NgwTabDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'ngw-tab-hr');
    this.renderer.addClass(this.elementRef.nativeElement, 'ngw-tab-container');
  }
}

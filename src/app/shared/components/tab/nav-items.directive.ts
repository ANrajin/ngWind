import {
    Directive,
    ElementRef,
    Renderer2,
} from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appNavItems]'
})

export class NavItems {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.addClass(this.elementRef.nativeElement, 'nav-item');
    }
}

import {
    Directive, ElementRef, OnInit, Renderer2,
} from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appNav]'
})

export class Nav implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.addClass(this.elementRef.nativeElement, 'nav-hr');
    }
}

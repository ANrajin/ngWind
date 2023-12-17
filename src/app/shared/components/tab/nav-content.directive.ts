import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appNavContent]'
})

export class NavContent implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void { }
}

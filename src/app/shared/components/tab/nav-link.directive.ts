import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    OnInit,
    Output,
    Renderer2,
} from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appNavLink]'
})

export class NavLink implements OnInit {
    @Output() index: EventEmitter<number> = new EventEmitter<number>();

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.addClass(this.elementRef.nativeElement, 'nav-link')
    }

    @HostListener('click', ['$event.target']) onClick(elem: Element) {
        const current = elem.closest('ul')?.querySelector('[aria-current=true]') as HTMLElement;
        current.setAttribute('aria-current', 'false');
        elem.setAttribute('aria-current', 'true');
        this.index.emit(Number(elem.getAttribute('aria-valuenow')));
    }
}

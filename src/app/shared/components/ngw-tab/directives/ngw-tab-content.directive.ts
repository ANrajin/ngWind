import { AfterContentInit, Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: 'ng-template[ngwTabContent]',
  standalone: true,
})
export class NgwTabContentDirective implements AfterContentInit {
  templateRef = inject(TemplateRef<any>);

  ngAfterContentInit(): void {
    console.log(this.templateRef.createEmbeddedView(null).rootNodes.map(x => x.outerHTML).join(''));
  }
}

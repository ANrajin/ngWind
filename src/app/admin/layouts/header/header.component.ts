import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2){}

  onClickProfile = () => {
      const profileDropdownList = this.element.nativeElement.querySelector('.profile-dropdown-list');
      this.renderer.setAttribute(profileDropdownList, 'aria-expanded', 'true')
  }

}

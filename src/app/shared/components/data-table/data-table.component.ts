import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];
  @Input() headerWidth: number = 0;
  @Input() rowWidth: number = 0;

  shorting: boolean = false;
  isOpenDropdown: boolean = false;

  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }

  openDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }
  isOpen: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  onClickProfile = () => {
    const profileDropdownList = this.element.nativeElement.querySelector(
      '.profile-dropdown-list'
    );
    this.renderer.setAttribute(profileDropdownList, 'aria-expanded', 'true');
  };

  @HostListener('click', ['$event.target']) onClick(e: Element) {
    const profileDropdown = this.element.nativeElement.querySelector(
      '.table-dropdown'
    ) as Element;

    if (!profileDropdown.contains(e)) {
      const profileDropdownList = this.element.nativeElement.querySelector(
        '.profile-dropdown-list'
      );
      this.renderer.setAttribute(profileDropdownList, 'aria-expanded', 'false');
    }
  }
}

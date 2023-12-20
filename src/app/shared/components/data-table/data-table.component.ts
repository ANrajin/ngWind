import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];
}

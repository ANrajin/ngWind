import { Component } from '@angular/core';
import { IProduct, TableData } from './table.data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  public products: IProduct[] = TableData.products;
  public pages: number[] = TableData.pageNumber;
}

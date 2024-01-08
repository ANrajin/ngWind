import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { TableData } from '../data-table/table.data';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgClass, PaginationComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class AdminPaginationComponent {
  public pages: number[] = TableData.pageNumber;
  getPageIndex(index: number) {
    //your code goes here
  }
}

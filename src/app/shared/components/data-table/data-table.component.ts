import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";
import { Datatable } from './data-table.type';
import { Filter, SortOrder } from './paging.type';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'data-table',
    standalone: true,
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.css',
    imports: [NgClass, NgIf, PaginationComponent]
})
export class DataTableComponent {
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];

  shorting: boolean = false;

  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }

  changePage(currentPage: number) {

  }

  @Input() url!: string;
  @Input() setting: Datatable = new Datatable(10, []);
  @Input() pageSize: number = 10;
  @Input() mode: number = 1;
  @Input() defaultFilters: Filter[] = [];
  isLoading: boolean = true;
  currentPageIndex: number = 1;
  totalRows: number = 0;
  sortColumns: SortOrder[] = [];
  filters: Filter[] = [];
  row$: Observable<any[]> = of([]);
  generalSearchValue: string = "";

  constructor(
    private httpService: HttpService,) {

  }
}

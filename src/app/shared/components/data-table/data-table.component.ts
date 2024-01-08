import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";
import { Datatable } from './data-table.type';
import { AdvanceSearchRequest, Filter, GeneralSearchRequest, IPagingSearchRequest, PaginateResult, SortOrder, SortOrderType } from './paging.type';
import { Observable, finalize, of } from 'rxjs';
import { HttpClientService } from '../../services/httpClient.service';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
  imports: [NgClass, NgIf, PaginationComponent, CommonModule, SafeHtmlPipe]
})
export class DataTableComponent implements OnInit {
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
    if (currentPage) {
      this.currentPageIndex = currentPage;
      this.loadTable();
    }
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
    private httpClientService: HttpClientService) {

  }

  ngOnInit(): void {
    this.loadTable();
  }

  onSort(name: string, order: SortOrderType) {
    this.sortColumns = [
      {
        name: name.toLowerCase(),
        order: order
      }
    ];
    this.loadTable();
  }

  isSortActive(name: string, order: SortOrderType) {
    const column = this.sortColumns.find(x => x.name.toLowerCase() == name.toLowerCase() && x.order == order);
    return column != null;
  }

  onAdvanceSearch(filters: Filter[]) {
    this.filters = filters;
    this.currentPageIndex = 1;
    this.loadTable();
  }

  onGeneralSearch(value: string) {
    this.currentPageIndex = 1;
    this.generalSearchValue = value;
    this.loadTable();
  }

  reloadTable() {
    this.currentPageIndex = 1;
    this.filters = [];
    this.generalSearchValue = '';
    this.loadTable();
  }

  loadTable() {
    let request: IPagingSearchRequest = {
      pageIndex: this.currentPageIndex,
      pageSize: this.pageSize,
      orders: this.sortColumns
    };
    if (this.mode == 1) {
      request = new GeneralSearchRequest(
        request.pageIndex,
        request.pageSize,
        request.orders,
        this.generalSearchValue);
    } else {
      request = new AdvanceSearchRequest(
        request.pageIndex,
        request.pageSize,
        request.orders,
        [...this.defaultFilters, ...this.filters]);
    }
    this.isLoading = true;
    this.httpClientService.post<PaginateResult<any>>(this.url, request)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(response => {
        if (response) {
          this.row$ = of(response.items);
          this.totalRows = response.totalFiltered;
        }
      });
  }
}

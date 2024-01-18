import { CommonModule, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { HttpClientService } from '../../services/httpClient.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { DataErrorComponent } from "./data-table-component/data-error.component";
import { DataNotFoundComponent } from './data-table-component/data-not-found.component';
import { DataTableLoaderComponent } from './data-table-component/data-table-loader.component';
import { Datatable } from './types/data-table.type';
import {
  AdvanceSearchRequest,
  FilterColumn,
  IPagingSearchRequest,
  PaginateResult,
  SortOrder,
  SortOrderType,
} from './types/paging.type';

@Component({
  selector: 'data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [NgClass, NgIf, PaginationComponent, CommonModule, SafeHtmlPipe, DataErrorComponent, DataTableLoaderComponent, DataNotFoundComponent]
})
export class DataTableComponent implements OnInit {
  shorting: boolean = false;

  changePage(event: { pageSize: number; currentPage: number }) {
    if (event) {
      this.currentPageIndex = event.currentPage;
      this.pageSize = event.pageSize;
      this.loadTable();
    }
  }

  @Input() url!: string;
  @Input() setting: Datatable = new Datatable([]);
  @Input() defaultFilters: FilterColumn[] = [];

  pageSize: number = 10;
  isLoading: boolean = true;
  currentPageIndex: number = 1;
  totalRows: number | null = null;
  sortColumns: SortOrder[] = [];
  row$: Observable<any[]> = of([]);
  generalSearchValue: string = '';
  isError: boolean = false;
  dataLength: number = 0

  constructor(private httpClientService: HttpClientService) {

  }

  ngOnInit(): void {
    this.loadTable();
  }

  onSort(name: string, order: SortOrderType) {
    this.sortColumns = [
      {
        sortBy: name.toLowerCase(),
        order: order,
      },
    ];
    this.loadTable();
  }

  isSortActive(name: string, order: SortOrderType) {
    const column = this.sortColumns.find(
      (x) => x.sortBy.toLowerCase() == name.toLowerCase() && x.order == order
    );
    return column != null;
  }

  public onAdvanceSearch(filters: FilterColumn[]) {
    this.defaultFilters = filters;
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
    this.generalSearchValue = '';
    this.loadTable();
  }

  loadTable() {
    let request: IPagingSearchRequest = {
      pageIndex: this.currentPageIndex,
      pageSize: this.pageSize,
      sortOrders: this.sortColumns,
    };

    request = new AdvanceSearchRequest(
      request.pageIndex,
      request.pageSize,
      request.sortOrders,
      this.defaultFilters
    );

    this.httpClientService
      .get<PaginateResult<any>>("https://tours-gules.vercel.app/api/v1/tours?page=1&limit=10")
      .pipe()
      .subscribe({
        next: (response) => {
          if (response) {
            this.dataLength = response.data.tours.length
            this.row$ = of(response.data.tours);
            this.totalRows = response.totalFiltered;
            this.isLoading = false;
            console.log(response.data.tours);
          }
        },
        error: (err) => {
          this.isError = !this.isError;
          this.isLoading = false;
        },
      });
  }
}

export interface PagingSearchRequest {
  pageIndex: number;
  pageSize: number;
  filters: FilterColumn[];
  sortOrders: SortOrder[];
}

export enum OperatorType {
  Equals = 1,
  Contains = 2,
  GreaterThan = 3,
  GreaterThanEquals = 4,
  LessThan = 5,
  LessThanEquals = 6,
  StartsWith = 7,
  EndsWith = 8
}

export enum SortOrderType {
  Ascending = 1,
  Descending = 2
}

export interface SortOrder {
  sortBy: string;
  order: SortOrderType
}

export interface Filter {
  name: string;
  value: string;
}

export interface FilterColumn {
  filterBy: string;
  operator: OperatorType;
  value: string;
  isGenericValue: boolean;
}

export enum FilterType {
  Single = 1,
  Multi = 2,
  Generic = 3
}

export interface IPagingSearchRequest {
  pageIndex: number,
  pageSize: number,
  sortOrders: SortOrder[]
}

export class GeneralSearchRequest implements IPagingSearchRequest {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public sortOrders: SortOrder[] = [],
    public searchText: string | null = null) {
  }
}

export class AdvanceSearchRequest implements IPagingSearchRequest {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public sortOrders: SortOrder[] = [],
    public filters: FilterColumn[] = []) {
  }
}

export interface IData{
  totalTours:number;
  page:number;
  tours:[]
}

export interface PaginateResult<T> {
  totalFiltered: number;
  total: number;
  items: T[]
}

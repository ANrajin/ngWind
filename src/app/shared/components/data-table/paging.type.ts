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
  name: string;
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
  type: FilterType;
}

export enum FilterType {
  Single = 1,
  Multi = 2,
  Generic = 3
}

export interface IPagingSearchRequest {
  pageIndex: number,
  pageSize: number,
  orders: SortOrder[]
}

export class GeneralSearchRequest implements IPagingSearchRequest {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public orders: SortOrder[] = [],
    public searchText: string | null = null) {
  }
}

export class AdvanceSearchRequest implements IPagingSearchRequest {
  constructor(
    public pageIndex: number,
    public pageSize: number,
    public orders: SortOrder[] = [],
    public filters: Filter[] = []) {
  }
}

export interface PaginateResult<T> {
  totalFiltered: number;
  total: number;
  items: T[]
}

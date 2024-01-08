export class Datatable {

  public pageSize: number = 10;
  public columns: DatatableColumn[] = [];

  constructor(pageSize: number, columns: DatatableColumn[]) {
    this.pageSize = pageSize;
    this.columns = columns;
  }
}

export class DatatableColumn {

  public title: string = '';
  public name: string = '';
  public isSortable: boolean = true;
  public isHideAble: boolean = false;
  public formatter?: (row: any) => string;
  public action?: (row: any) => void

  constructor(title: string, name: string, isSortable: boolean, isHideAble: boolean = false, formatter?: (row: any) => any, action?: (row: any) => void) {
    this.title = title;
    this.name = name;
    this.isSortable = isSortable;
    this.isHideAble = isHideAble;
    this.formatter = formatter;
    this.action = action;
  }
}

export class Datatable {

  public columns: DatatableColumn[] = [];

  constructor(columns: DatatableColumn[]) {
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

  constructor(title: string, name: string, isHideAble: boolean = false, isSortable:boolean = false, formatter?: (row: any) => any, action?: (row: any) => void) {
    this.title = title;
    this.name = name;
    this.isHideAble = isHideAble;
    this.isSortable = isSortable;
    this.formatter = formatter;
    this.action = action;
  }
}


export class Datatable {
  public tableName: string = "Table";

  public columns: DatatableColumn[] = [];

  constructor(columns: DatatableColumn[], tableName: string = "Table") {
    this.columns = columns;
    this.tableName = tableName;
  }
}

export class DatatableAction {
  public title: string = '';
  public class: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | '' = '';
  public action?: (row: any) => void;

  constructor(
    title: string,
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | '' = '',
    callback: (row: any) => void) {
    this.title = title;
    this.class = color;
    this.action = callback;
  }
}

export class DatatableColumn {

  public title: string = '';
  public name: string = '';
  public width: string = ''
  public isSortable: boolean = true;
  public isAction: boolean = false;
  public actions: DatatableAction[] = []
  public formatter?: (row: any) => string;
  public action?: (row: any) => void

  constructor(title: string, name: string, width: string = "100%",
    isAction: boolean = false, isSortable: boolean = false,
    formatter?: (row: any) => any, action?: (row: any) => void,
    actions: DatatableAction[] = []) {
    this.title = title;
    this.name = name;
    this.width = width;
    this.isAction = isAction;
    this.isSortable = isSortable;
    this.formatter = formatter;
    this.action = action;
    this.actions = actions;
  }
}

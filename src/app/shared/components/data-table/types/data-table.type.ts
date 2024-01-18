export class Datatable {
  public tableName: string = 'Table';
  public columns: DatatableColumn[] = [];
  constructor(columns: DatatableColumn[], tableName: string = 'Table') {
    this.columns = columns;
    this.tableName = tableName;
  }
}

export interface IButtonConfig {
  tittle?: string;
  icon?: string;
}

export class DatatableAction {
  public buttonConfig: IButtonConfig = {}
  public class:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | '' = '';
  public action?: (row: any) => void;

  constructor(
    buttonConfig: IButtonConfig = {},
    color:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'info'
      | '' = '',
    callback: (row: any) => void
  ) {
    this.buttonConfig = buttonConfig;
    this.class = color;
    this.action = callback;
  }
}

export enum DisplayType {

  xs = 'table-cell',
  sm = 'hidden sm:table-cell',
  md = 'hidden md:table-cell',
  lg = 'hidden lg:table-cell',
  xl = 'hidden xl:table-cell',
  xxl = 'hidden 2xl:table-cell',
}

export interface IUtils {
  width?: string;
  align?: string;
  display?: string;
  pipe?: string;
}


export class DatatableColumn {
  public title: string = '';
  public name: string = '';
  public utils: IUtils = {};
  public isSortable: boolean = true;
  public isAction: boolean = false;
  public actions: DatatableAction[] = [];
  public formatter?: (row: any) => string;
  public action?: (row: any) => void;

  constructor(
    title: string,
    name: string,
    utils: IUtils = {},
    isAction: boolean = false,
    isSortable: boolean = false,
    formatter?: (row: any) => any,
    action?: (row: any) => void,
    actions: DatatableAction[] = []
  ) {
    this.title = title;
    this.name = name;
    this.utils = utils;
    this.isAction = isAction;
    this.isSortable = isSortable;
    this.formatter = formatter;
    this.action = action;
    this.actions = actions;
  }
}

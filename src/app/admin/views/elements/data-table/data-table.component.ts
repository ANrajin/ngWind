import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import {
  Datatable,
  DatatableAction,
  DatatableColumn,
} from 'src/app/shared/components/data-table/data-table.type';
import { FilterColumn } from 'src/app/shared/components/data-table/paging.type';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgClass, DataTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class AdminDataTableComponent {
  filters: FilterColumn[] = [
    // {
    //   filterBy: "Name",
    //   value: "A positive",
    //   operator: OperatorType.Contains,
    //   isGenericValue: false
    // }
  ];

  apiUrl: string = 'api/v1/blood-groups/list';

  dtSetting: Datatable = new Datatable(
    [
      new DatatableColumn('ID No', 'id', { width: '20%' }, true, true),
      new DatatableColumn('Name', 'name', { width: '20%', align: 'justify-center' }, true, true),
      new DatatableColumn('Description', 'description', { width: '20%', align: 'justify-center' }, true, true),
      new DatatableColumn('Action', 'status', { width: '40%', align: 'justify-end' }, false, false, (row) => this.prepare(row), undefined,
        [new DatatableAction('Actions', 'primary', (x) => this.hitAction(x))]
      ),
    ],
    'Custom Table'
  );

  @ViewChild(DataTableComponent) datatable?: DataTableComponent;

  hitAction(x: any) { }

  onSearch(filters: FilterColumn[]) {
    this.datatable?.onAdvanceSearch(filters);
  }

  prepare(row: any) {
    return `<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
    ${row.status}
    </span>`;
  }
}

import { NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import { IColumn, IProduct, TableData } from './table.data';
import { Datatable, DatatableColumn } from 'src/app/shared/components/data-table/data-table.type';
import { FilterColumn, OperatorType } from 'src/app/shared/components/data-table/paging.type';

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
  ]

  apiUrl: string = "api/v1/blood-groups/list"

  dtSetting: Datatable = new Datatable([
    new DatatableColumn('ID No', "id", "20%", true, true),
    new DatatableColumn('Name', "name", "50%", true, true),
    new DatatableColumn('Description', "description", "20%", true, true),
    new DatatableColumn('Status', "status", "10%", true, false, (row) => this.prepare(row)),
  ]);

  @ViewChild(DataTableComponent) datatable?: DataTableComponent;

  onSearch(filters: FilterColumn[]) {
    this.datatable?.onAdvanceSearch(filters);
  }

  prepare(row: any) {
    return `<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">${row.status}</span>`
  }

}

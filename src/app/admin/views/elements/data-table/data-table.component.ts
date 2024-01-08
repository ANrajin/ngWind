import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/components/data-table/data-table.component';
import { IColumn, IProduct, TableData } from './table.data';
import { Datatable, DatatableColumn } from 'src/app/shared/components/data-table/data-table.type';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgClass, DataTableComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class AdminDataTableComponent {
  apiUrl: string = "api/v1/blood-groups/list"

  dtSetting: Datatable = new Datatable([
    new DatatableColumn('ID No', "id", true),
    new DatatableColumn('Name', "name", true),
    new DatatableColumn('Description', "description", false),
    new DatatableColumn('Status', "status", true, row => this.prepare(row)),
  ]);

  prepare(row: any) {
    return `<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">${row.status}</span>`
  }

}

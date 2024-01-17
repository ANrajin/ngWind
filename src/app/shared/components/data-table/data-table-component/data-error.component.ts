import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'data-error',
  standalone: true,
  imports: [],
  template: `<div
          class="flex items-center justify-center mx-auto w-[190px]  py-2 px-3 bg-rose-50 rounded-lg shadow-sm">
          <div
          class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-red-500 bg-red-200 rounded-lg ">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
          <span class="sr-only">Error icon</span>
          </div>
          <div class="text-sm font-normal text-red-600 ml-3">Data fetching error</div>
        </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataErrorComponent {
  constructor() {
    console.log('data error ');
  }

}

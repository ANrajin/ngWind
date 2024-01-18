import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'data-not-found',
  standalone: true,
  imports: [],
  template: `
  <div
      class="flex items-center justify-center mx-auto w-[165px]  py-2 px-3 bg-green-50 rounded-lg shadow-sm">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 p-1 text-green-500 bg-green-200 rounded-lg ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"
      aria-hidden="true">
      <path
      d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
      </svg>
      <span class="sr-only">Error icon</span>
      </div>
      <div class="text-sm font-normal text-green-600 ml-3">No data found</div>
  </div>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataNotFoundComponent {
  constructor() {
    console.log('data not fond');
  }

}

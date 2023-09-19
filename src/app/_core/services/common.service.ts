import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class CommonService {
  constructor() { }

  public prepareRoute(...paths: string[]): string{
    let rootRoute = '/';
    return rootRoute.concat(paths.filter(Boolean).join('/'));
  }
}

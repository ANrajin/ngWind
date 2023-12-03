import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})

export class LocalStorageService{
  put(key:string, value: any){
    localStorage.setItem(key, value);
  }

  get(key: string):any{
    return localStorage.getItem(key);
  }

  remove(key: string){
    localStorage.removeItem(key);
  }

  destroy(){
    localStorage.clear();
  }
}

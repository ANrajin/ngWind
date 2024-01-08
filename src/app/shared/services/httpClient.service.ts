import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  private readonly _hostUrl: string = '';

  constructor(private readonly _http: HttpClient, private readonly _config: ConfigService) {
    this._hostUrl = this._config.apiUrl;
  }

  public get<T>(url: string): Observable<T> {
    return this._http.get<T>(url);
  }

  public post<T>(url: string, requestBody: any = null): Observable<T> {
    return this._http.post<T>(url, requestBody);
  }

  public delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(url);
  }

  public put<T>(url: string, requestBody: any = null): Observable<T> {
    return this._http.put<T>(url, requestBody);
  }

  private getUri = (endpoint: string) => this._hostUrl + endpoint;
}

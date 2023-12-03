import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Signin} from "./signin/signin.model";
import {Observable} from "rxjs";
import {AuthResponse} from "./auth.response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoints: any = {
    signin: "api/v1/Signin"
  };

  constructor(private httpClient: HttpClient) { }

  signIn(data: Signin): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.endpoints.signin, data);
  }
}

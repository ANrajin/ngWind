import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorsInterceptor} from "./errors.interceptor";
import {RequestsInterceptor} from "./requests.interceptor";

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true},
];

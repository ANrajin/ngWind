import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SpinnerComponent} from "../../shared/components/spinner/spinner.component";
import {ValidationErrorComponent} from "../../shared/components/validation-error/validation-error.component";
import {AlertComponent} from "../../shared/components/alert/alert.component";


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SpinnerComponent,
    ValidationErrorComponent,
    AlertComponent,
  ],
  exports: [
    SigninComponent,
    SignupComponent,
  ]
})
export class AuthModule { }

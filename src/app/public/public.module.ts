import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from "../shared/spinner/spinner.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
    declarations: [
        PublicComponent,
        PageNotFoundComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        SpinnerComponent
    ]
})
export class PublicModule { }

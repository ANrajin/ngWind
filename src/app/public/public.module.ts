import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PublicRoutingModule} from './public-routing.module';
import {PublicComponent} from './public.component';
import {HomeComponent} from './home/home.component';
import {AuthModule} from "./auth/auth.module";


@NgModule({
    declarations: [
        PublicComponent,
        PageNotFoundComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        AuthModule
    ]
})
export class PublicModule { }

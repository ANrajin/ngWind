import { Component } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/utils/animations';
import { PublicRoutes } from '../../public.routes';
import { FormBuilder } from "@angular/forms";
import { AlertType } from "../../../shared/components/alert/alert.type";
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { AdminRoutes } from 'src/app/admin/admin.routes';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [pageTransition]
})
export class SigninComponent {
  isLoading: boolean = false;
  readonly publicRoutes = PublicRoutes;
  readonly currentYear: number = DatetimeHelper.currentYear;

  serverErrors: string[] = [];

  signInForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(
    public commonService: CommonService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }
  protected readonly AlertType = AlertType;

  protected onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate([AppRoutes.Admin, AdminRoutes.Dashboard]);
    }, 3000);
  }

  protected onAlertCloseHandler = (e: any) => {
    this.serverErrors = [];
  }
}

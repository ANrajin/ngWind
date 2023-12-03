import {Component} from '@angular/core';
import {DatetimeHelper} from 'src/app/_core/helpers/datetime.helper';
import {CommonService} from 'src/app/_core/services/common.service';
import {pageTransition} from 'src/app/shared/utils/animations';
import {PublicRoutes} from '../../public.routes';
import {FormBuilder, Validators} from "@angular/forms";
import {Signin} from './signin.model';
import {LocalStorageService} from "../../../shared/services/localStorage.service";
import {AuthService} from "../auth.service";
import {AlertType} from "../../../shared/components/alert/alert.type";

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
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public commonService: CommonService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorage: LocalStorageService) {
  }
  protected readonly AlertType = AlertType;

  protected onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    if (this.signInForm.invalid) return;

    this.isLoading = true;

    const formData: Signin = {
      username: this.signInForm.get('username')?.value!,
      password: this.signInForm.get('password')?.value!
    };

    this.authService.signIn(formData).subscribe({
      next: (res) => {
        this.localStorage.put("token", res.token);
      },
      error: (err: Signin) => {
        this.isLoading = false;
        this.serverErrors = [];
        for (const key in err) {
          this.serverErrors.push(err[key as keyof Signin]);
        }
      },
      complete: () => {
        window.location.href = "/admin/dashboard";
        this.isLoading = false;
      },
    });
  }

  protected onAlertCloseHandler = (e: any) => {
    this.serverErrors = [];
  }
}

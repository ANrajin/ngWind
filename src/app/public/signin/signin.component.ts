import { Component } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/animations';
import { PublicRoutes } from '../public.routes';

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

  constructor(public commonService: CommonService) {}

  onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}

import { Component } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/utils/animations';
import { PublicRoutes } from '../../public.routes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [pageTransition]
})
export class SignupComponent {
  isLoading: boolean = false;
  readonly currentYear: number = DatetimeHelper.currentYear;
  readonly publicRoutes = PublicRoutes;

  constructor(public commonService: CommonService) { }

  onFormSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}

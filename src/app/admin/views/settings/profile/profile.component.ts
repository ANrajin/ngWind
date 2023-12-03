import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/utils/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [pageTransition]
})
export class ProfileComponent {

}

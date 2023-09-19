import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [pageTransition]
})
export class ProfileComponent {

}

import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [pageTransition]
})
export class UsersComponent {

}

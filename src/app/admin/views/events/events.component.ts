import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/utils/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [pageTransition]
})
export class EventsComponent {
  constructor(private router: Router) {
  }

  loadTest()
  {
    this.router.navigate(['admin', 'events', {outlets: {test: ['testing']}}]);
  }
}

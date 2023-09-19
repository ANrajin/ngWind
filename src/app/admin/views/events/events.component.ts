import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [pageTransition]
})
export class EventsComponent {

}

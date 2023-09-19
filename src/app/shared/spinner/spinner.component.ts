import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInOut } from '../animations';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  animations: [fadeInOut]
})
export class SpinnerComponent {

}

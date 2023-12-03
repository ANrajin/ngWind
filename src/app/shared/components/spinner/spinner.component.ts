import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fadeInOut } from '../../utils/animations';

@Component({
  selector: 'btn-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  animations: [fadeInOut]
})
export class SpinnerComponent {
  @Input() show: boolean = false;
}

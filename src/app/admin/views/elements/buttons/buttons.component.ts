import { Component } from '@angular/core';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {}

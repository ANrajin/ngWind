import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl} from "@angular/forms";
import {ERROR_MESSAGES} from "./error-messages";

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ValidationErrorComponent implements OnInit {

  @Input() fieldControl!: FormControl | undefined;

  protected errorMessages: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  hasError(): boolean {
    this.errorMessages = [];

    //check for server error
    if (
      this.fieldControl !== null
      && this.fieldControl !== undefined
      && this.fieldControl.getError('messages') !== undefined) {
      this.errorMessages = this.fieldControl.getError('messages');
      return true;
    }

    //check for client error
    if (
      this.fieldControl !== null
      && this.fieldControl !== undefined
      && this.fieldControl.errors !== null) {
      Object.keys(this.fieldControl.errors!).map((err: any) => {
        // @ts-ignore
        this.errorMessages.push(ERROR_MESSAGES[err]());
      });

      return this.fieldControl.touched && this.fieldControl.errors !== null;
    }

    return false;
  }
}

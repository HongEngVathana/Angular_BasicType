import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
    fristName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl(''),
    userName: new FormControl('vathana@123', [Validators.email]),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    isAcceptTerms: new FormControl(''),
  });
  formValue: any;
  onSave() {
    debugger;
    this.formValue = this.studentForm.value;
  }
}

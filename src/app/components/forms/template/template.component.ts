import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  studentObj: any = {
    firstName: '',
    latsName: '',
    userName: '',
    city: '',
    state: '',
    zipcode: '',
    isAcceptTerms: false,
  };
  formValue: any;

  onSubmit() {
    debugger;
    this.formValue = this.studentObj;
  }
  resetForm() {
    // debugger;
    this.studentObj = {
      firstName: '',
      latsName: '',
      userName: '',
      city: '',
      state: '',
      zipcode: '',
      isAcceptTerms: false,
    };
  }
}

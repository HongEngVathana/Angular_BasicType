import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //string ,number , boolean ,date

  courseName: string = "I'm Vathana Angular 18";

  inputType = 'checkbox';
  nollNo: number = 1233;
  isIndian: boolean = false;

  currentDate: Date = new Date();
  myClass: string = 'bg-primary';

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }
  chageCoureName() {
    debugger;
    this.courseName = 'React JS';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structual',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structual.component.html',
  styleUrl: './structual.component.css',
})
export class StructualComponent {
  isDiv1Visiable: boolean = true;
  idDiv2visiable: boolean = false;

  cityArray: string[] = ['Pune', 'Mumnai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    { studID: 12, name: 'AAA', city: 'New York', isActive: false },
    { studID: 11, name: 'BBB', city: 'Los Angeles', isActive: false },
    { studID: 10, name: 'CCC', city: 'Chicago', isActive: true },
    { studID: 9, name: 'DDD', city: 'Houston', isActive: false },
    { studID: 8, name: 'EEE', city: 'Miami', isActive: false },
  ];

  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = 'r';
  showDiv1() {
    this.isDiv1Visiable = true;
  }
  hideDiv1() {
    this.isDiv1Visiable = false;
  }
  toggleDiv2() {
    this.idDiv2visiable = !this.idDiv2visiable;
    // if (this.idDiv2visiable == true) {
    //   this.idDiv2visiable = false;
    // } else {
    //   this.idDiv2visiable = true;
    // }
  }
  constructor(private router: Router) {}
  naviagteToAttributer() {
    this.router.navigateByUrl('attributedirective');
  }
}

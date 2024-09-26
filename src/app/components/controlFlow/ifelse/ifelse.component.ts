import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css',
})
export class IfelseComponent {
  div1Cisiable: boolean = false;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  showDiv1() {
    this.div1Cisiable = true;
  }
  hideDiv1() {}
  toggleDiv2() {
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }
  seletedStatus: string = '';
}

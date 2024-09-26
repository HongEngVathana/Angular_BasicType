import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {
  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';

  inActive: boolean = false;
  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }

  addBlueClass() {
    this.div1BgColor = 'bg-primary';
  }
  toggleDiv2Class() {
    debugger;
    this.isDiv2Active = !this.isDiv2Active;
  }

  customerStyle: any = {
    color: 'white',
    'background-color': 'red',
    width: '200px',
    height: '200px',
    'border-radius': '50%',
  };
  studentList: any[] = [
    {
      studID: 12,
      totalmatk: '23',
      gender: 'M',
      name: 'AAA',
      city: 'New York',
      isActive: false,
    },
    {
      studID: 11,
      totalmatk: '3',
      gender: 'M',
      name: 'BBB',
      city: 'Los Angeles',
      isActive: false,
    },
    {
      studID: 10,
      totalmatk: '10',
      gender: 'M',
      name: 'CCC',
      city: 'Chicago',
      isActive: true,
    },
    {
      studID: 9,
      totalmatk: '2',
      gender: 'M',
      name: 'DDD',
      city: 'Houston',
      isActive: false,
    },
    {
      studID: 8,
      totalmatk: '50',
      gender: 'M',
      name: 'EEE',
      city: 'Miami',
      isActive: false,
    },
  ];
}

import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName: string = 'this is a demo session';

  currentDate: Date = new Date();
  student: any = {
    name: 'Chetan',
    city: 'Pune',
    empId: 234,
  };
  currentTime: Observable<Data> = new Observable<Data>();
  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}

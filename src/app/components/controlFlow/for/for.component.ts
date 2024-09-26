import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  dayNumber: string = '';
  dayName: string = '';
  cityArray: string[] = ['Pune', 'Munbai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    { stusId: 1, name: 'John Smith', city: 'New York', isActive: true },
    { stusId: 2, name: 'Emily Johnson', city: 'Los Angeles', isActive: false },
    { stusId: 3, name: 'Michael Brown', city: 'Chicago', isActive: true },
    { stusId: 4, name: 'Sophia Davis', city: 'Houston', isActive: false },
    { stusId: 5, name: 'James Wilson', city: 'Phoenix', isActive: true },
    {
      stusId: 6,
      name: 'Olivia Martinez',
      city: 'Philadelphia',
      isActive: false,
    },
    {
      stusId: 7,
      name: 'William Anderson',
      city: 'San Antonio',
      isActive: true,
    },
    { stusId: 8, name: 'Ava Thomas', city: 'San Diego', isActive: false },
    { stusId: 9, name: 'David Taylor', city: 'Dallas', isActive: true },
    { stusId: 10, name: 'Isabella Moore', city: 'San Jose', isActive: false },
    { stusId: 11, name: 'Benjamin White', city: 'Austin', isActive: true },
    { stusId: 12, name: 'Mia Harris', city: 'Jacksonville', isActive: false },
    { stusId: 13, name: 'Daniel Clark', city: 'Fort Worth', isActive: true },
    {
      stusId: 14,
      name: 'Charlotte Robinson',
      city: 'Columbus',
      isActive: false,
    },
    { stusId: 15, name: 'Lucas Walker', city: 'San Francisco', isActive: true },
    { stusId: 16, name: 'Amelia Hall', city: 'Charlotte', isActive: false },
    { stusId: 17, name: 'Henry Young', city: 'Indianapolis', isActive: true },
    { stusId: 18, name: 'Evelyn Scott', city: 'Seattle', isActive: false },
    { stusId: 19, name: 'Alexander King', city: 'Denver', isActive: true },
    { stusId: 20, name: 'Harper Lee', city: 'Boston', isActive: false },
  ];
}

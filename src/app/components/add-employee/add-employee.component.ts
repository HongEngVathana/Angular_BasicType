import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { AttributeComponent } from '../attribute/attribute.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [EmployeeListComponent, DataBindingComponent, AttributeComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {}

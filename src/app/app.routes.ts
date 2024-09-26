import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructualComponent } from './components/structual/structual.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'emp-list',
    component: EmployeeListComponent,
  },
  {
    path: 'app-att',
    component: AttributeComponent,
  },
  {
    path: 'structral-dir',
    component: StructualComponent,
  },
  {
    path: 'attributedirective',
    component: DirectiveComponent,
  },
  {
    path: 'if',
    component: IfelseComponent,
  },
  {
    path: 'for',
    component: ForComponent,
  },
  {
    path: 'switch-case',
    component: IfelseComponent,
  },
];

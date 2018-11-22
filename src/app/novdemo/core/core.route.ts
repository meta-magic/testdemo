
import {Routes } from '@angular/router';
import { TestuiComponent } from './components/testui/testui.component';
import { TestformComponent } from './components/testform/testform.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeregistrationformComponent } from './components/employeeregistrationform/employeeregistrationform.component';
export const ROUTES: Routes = [
{
	    path: 'testui', component: TestuiComponent
},
{
	    path: 'test-form', component: TestformComponent
},
{
	    path: 'employee-list', component: EmployeelistComponent
},
{
	    path: 'employee-registration-form', component: EmployeeregistrationformComponent
},
];


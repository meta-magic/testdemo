import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { TestuiComponent } from './components/testui/testui.component';
import { TestformComponent } from './components/testform/testform.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeregistrationformComponent } from './components/employeeregistrationform/employeeregistrationform.component';
import { EmployeeServiceService } from './services/employeeservice.service';
import { CountryServiceService } from './services/countryservice.service';
import { StateServiceService } from './services/stateservice.service';
import { DepartmentServiceService } from './services/departmentservice.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	    TestuiComponent,
	    TestformComponent,
	    EmployeelistComponent,
	    EmployeeregistrationformComponent,
	  ],
	  providers: [
	    EmployeeServiceService,
	    CountryServiceService,
	    StateServiceService,
	    DepartmentServiceService,
	  ]
})
export class CoreModule {
}

/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from '../../services/stateservice.service';
import { Employee } from './../../models/employee.model';

@Component(
{
	selector: 'employeeregistrationform',
	templateUrl: 'employeeregistrationform.component.html'
})
export class EmployeeregistrationformComponent implements OnInit {
	employee: Employee;
	genderId_Data:any;
	stateId_Data:any;
	successMsgData:any[]=[];
	
	constructor(private stateServiceService: StateServiceService, private router: Router) {
		this.employee = new Employee();
	    this.genderId_Data=[{"genderId":"1","gender":"Male"},{"genderId":"2","gender":"Female"}];
		this.stateId_Data=[];
	}
	ngOnInit() {
	}
	
	onSingleSelect_countryId(eventData:any) { 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData: any) {
	  this.stateServiceService.findbycountryid(this.employee.countryId, this.bindResponseForFindbycountryid_rPg.bind(this), () => {});
	}
	private bindResponseForFindbycountryid_rPg(response: any) {
		this.stateId_Data=response.response;
	}
	 
	onClick_navigate(eventData:any) { 
		this.router.navigate(['novdemo/core/employee-list']);
		
	} 
}


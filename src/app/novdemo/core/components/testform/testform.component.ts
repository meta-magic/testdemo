/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../../services/employeeservice.service';
import { StateServiceService } from '../../services/stateservice.service';
import { Employee } from './../../models/employee.model';

@Component(
{
	selector: 'testform',
	templateUrl: 'testform.component.html'
})
export class TestformComponent implements OnInit {
	employee: Employee;
	genderId_Data:any;
	stateId_Data:any;
	errorMsgData:any[]=[];
	successMsgData:any[]=[];
	
	constructor(private employeeServiceService: EmployeeServiceService, private stateServiceService: StateServiceService, private router: Router) {
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
	  this.stateServiceService.findbycountryid(this.employee.countryId, this.bindResponseForFindbycountryid_mSJ.bind(this), () => {});
	}
	private bindResponseForFindbycountryid_mSJ(response: any) {
		this.stateId_Data=response.response;
	}
	 
	onSingleSelect_stateId(eventData:any) { 
	} 
	onClick_save(eventData:any) { 
		this.save(eventData);
	}
	private save(eventData: any) {
		
	  this.employeeServiceService.save(this.employee, this.bindResponseForSave_PHH.bind(this), () => {});
	}
	private bindResponseForSave_PHH(response: any) {
		if(response.success) {
			this.router.navigate(['novdemo/core/testui']);
		}else {
			this.errorMsgData.push('Unable to save record');
			
		}
	}
	 
}


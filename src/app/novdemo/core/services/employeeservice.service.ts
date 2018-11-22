/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import { HttpClient } from '@angular/common/http';
import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Responsebean } from '../models/responsebean.model';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeServiceService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public save(employee: Employee, onSuccess: (data: Responsebean) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.post(CORE_SERVICE_URL.EMPLOYEESERVICE + '/', employee), onSuccess, onFailure);
	}
	public findall(onSuccess: (data: Employee) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Employee>(CORE_SERVICE_URL.EMPLOYEESERVICE + '/'),  onSuccess, onFailure);
	}
}


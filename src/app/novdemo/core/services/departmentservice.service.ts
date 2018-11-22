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
import { Department } from '../models/department.model';

@Injectable()
export class DepartmentServiceService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public findall(onSuccess: (data: Department) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Department>(CORE_SERVICE_URL.DEPARTMENTSERVICE + '/'),  onSuccess, onFailure);
	}
}


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
import { Country } from '../models/country.model';

@Injectable()
export class CountryServiceService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public findall(onSuccess: (data: Country) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Country>(CORE_SERVICE_URL.COUNTRYSERVICE + '/'),  onSuccess, onFailure);
	}
}


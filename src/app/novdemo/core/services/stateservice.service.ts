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
import { Stateresponse } from '../models/stateresponse.model';

@Injectable()
export class StateServiceService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public findbycountryid(id: String, onSuccess: (data: Stateresponse) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Stateresponse>(CORE_SERVICE_URL.STATESERVICE  +  '/findbycountryid/'+id),  onSuccess, onFailure);
	}
}


/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import { States } from './states.model';
export class Stateresponse
{
	
	success: boolean;
	message: string;
	response: States[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set setSuccess(value: boolean) {
		this.success = value;
	}
	get getSuccess() : boolean {
		return this.success;
	}
	set setMessage(value: string) {
		this.message = value;
	}
	get getMessage() : string {
		return this.message;
	}
	
}

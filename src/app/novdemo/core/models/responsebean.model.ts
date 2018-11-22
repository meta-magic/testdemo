/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import { Employee } from './employee.model';
export class Responsebean
{
	
	success: boolean;
	message: string;
	response: Employee; 
	
	constructor() { 
		this.response= new Employee(); 
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
	set setEmployee(value: Employee) {
		this.response = value;
	}
	get getEmployee() : Employee {
		return this.response;
	}
	
}

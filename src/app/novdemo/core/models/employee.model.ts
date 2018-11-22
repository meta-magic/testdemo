/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
export class Employee
{
	
	id: string;
	firstName: string;
	lastName: string;
	genderId: string;
	phone: string;
	age: number;
	email: string;
	departmentId: string;
	countryId: string;
	stateId: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setFirstName(value: string) {
		this.firstName = value;
	}
	get getFirstName() : string {
		return this.firstName;
	}
	set setLastName(value: string) {
		this.lastName = value;
	}
	get getLastName() : string {
		return this.lastName;
	}
	set setGenderId(value: string) {
		this.genderId = value;
	}
	get getGenderId() : string {
		return this.genderId;
	}
	set setPhone(value: string) {
		this.phone = value;
	}
	get getPhone() : string {
		return this.phone;
	}
	set setAge(value: number) {
		this.age = value;
	}
	get getAge() : number {
		return this.age;
	}
	set setEmail(value: string) {
		this.email = value;
	}
	get getEmail() : string {
		return this.email;
	}
	set setDepartmentId(value: string) {
		this.departmentId = value;
	}
	get getDepartmentId() : string {
		return this.departmentId;
	}
	set setCountryId(value: string) {
		this.countryId = value;
	}
	get getCountryId() : string {
		return this.countryId;
	}
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	
}

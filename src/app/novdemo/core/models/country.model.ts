/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
export class Country
{
	
	id: string;
	countryName: string;
	countryCode1: string;
	currencyName: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	set setCountryCode1(value: string) {
		this.countryCode1 = value;
	}
	get getCountryCode1() : string {
		return this.countryCode1;
	}
	set setCurrencyName(value: string) {
		this.currencyName = value;
	}
	get getCurrencyName() : string {
		return this.currencyName;
	}
	
}

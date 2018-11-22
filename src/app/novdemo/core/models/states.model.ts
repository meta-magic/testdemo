/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
export class States
{
	
	stateId: string;
	stateName: string;
	countryId: string;
	
	constructor() { 
	}
	
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setCountryId(value: string) {
		this.countryId = value;
	}
	get getCountryId() : string {
		return this.countryId;
	}
	
}

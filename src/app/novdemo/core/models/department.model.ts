/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
export class Department
{
	
	id: string;
	name: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setName(value: string) {
		this.name = value;
	}
	get getName() : string {
		return this.name;
	}
	
}

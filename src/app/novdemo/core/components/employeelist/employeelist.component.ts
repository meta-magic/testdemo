/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'employeelist',
	templateUrl: 'employeelist.component.html'
})
export class EmployeelistComponent implements OnInit {
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
}


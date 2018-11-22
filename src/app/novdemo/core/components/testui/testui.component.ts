/**
 * Created by: Ketan Gote
 * Date: 22/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit {
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
}


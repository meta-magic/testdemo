import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"Demo App","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"Employee List","expand":false,"id":"e7e33e53-65b7-4daa-89f8-62c5798d50aa","leaf":true,"icon":"fa fa-file-text-o","routerLink":"novdemo/core/employee-list","children":null},{"text":"Employee Registration Form","expand":false,"id":"cc83b7d4-f142-4620-b05a-cc48b3e1b1c9","leaf":true,"icon":"fa fa-file-text-o","routerLink":"novdemo/core/employee-registration-form","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}

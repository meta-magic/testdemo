import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'novdemo/core', loadChildren: './../novdemo/core/core.module#CoreModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}

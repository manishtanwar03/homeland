import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  { path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path:'404', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

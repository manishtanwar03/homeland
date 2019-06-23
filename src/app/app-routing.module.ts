import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Page404Component } from './page404/page404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyDetailComponent } from './dashboard/property-detail/property-detail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full'},
  { path:'dashboard',canActivateChild:[AuthGuard],children:[
      { path:'',component:DashboardComponent},
      { path:':id',component:PropertyDetailComponent  }
  ]},
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},
  { path:"**", redirectTo:'/404'},
  { path:'404', component:Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../services/auth.guard';
import { PropertyDetailComponent } from '../properties/property-detail/property-detail.component';


const routes:Routes=[
    { path:'dashboard',canActivate:[AuthGuard],children:[
        { path : '', component:DashboardComponent},
        { path : ':id', component:PropertyDetailComponent}
    ]},
    { path:'**', redirectTo:'/404'}
];

@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ]
})
export class DashboardRoutingModule {
    
}

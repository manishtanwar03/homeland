import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PropertyService } from '../services/property.service';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { DashboardComponent } from './dashboard.component';
import { PropertiesModule } from '../properties/properties.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        HeaderComponent,
        FiltersComponent,
        DashboardComponent
    ],
    imports :[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DashboardRoutingModule,
        PropertiesModule,
    ],
    providers:[ PropertyService ]

})

export class DashboardModule{

}
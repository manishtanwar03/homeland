import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent
    ],
    imports :[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RouterModule
    ],
    providers:[]

})

export class AuthModule{

}
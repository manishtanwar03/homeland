import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Page404Component } from './page404/page404.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FiltersComponent } from './dashboard/filters/filters.component';
import { PropertiesComponent } from './dashboard/properties/properties.component';
import { PropertyComponent } from './dashboard/property/property.component';
import { FooterComponent } from './footer/footer.component';
import { PropertyDetailComponent } from './dashboard/property-detail/property-detail.component';
import { PropertyPipe } from './dashboard/properties/property.pipe';


import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Page404Component,
    HeaderComponent,
    DashboardComponent,
    FiltersComponent,
    PropertiesComponent,
    PropertyComponent,
    FooterComponent,
    PropertyDetailComponent,
    PropertyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ CookieService, AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

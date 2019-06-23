import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { AuthModule } from './auth/auth.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { PropertiesModule } from './properties/properties.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    PropertiesModule,
    DashboardRoutingModule,
  ],
  providers:[ CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { TripComponent } from './trip/trip.component';
import { StationComponent } from './station/station.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    TripComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"admin-login", component:AdminLoginComponent},
      {path:"admin-signup", component:AdminSignupComponent},
      {path:"trip", component:TripComponent},
      {path:'station',component: StationComponent},
      {path:' ', redirectTo:'admin-signup', pathMatch:'full'},
      {path: '**' , redirectTo:'admin-signup', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

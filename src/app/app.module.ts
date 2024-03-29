import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { TripComponent } from './trip/trip.component';
import { StationComponent } from './station/station.component';
import { RouterModule } from '@angular/router';
import { ModifyTripsComponent } from './modify-trips/modify-trips.component';
import { AddTripsComponent } from './add-trips/add-trips.component';
import { AddStationsComponent } from './add-stations/add-stations.component';
import { ModifyStationsComponent } from './modify-stations/modify-stations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    TripComponent,
    StationComponent,
    ModifyTripsComponent,
    AddTripsComponent,
    AddStationsComponent,
    ModifyStationsComponent,
    DeleteStationComponent,
    DeleteTripComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"login", component:AdminLoginComponent},
      {path:"deletestation", component:DeleteStationComponent},
      {path:"deletetrip", component:DeleteTripComponent},
      {path:"signup", component:AdminSignupComponent},
      {path:"trip", component:TripComponent},
      {path:'station',component: StationComponent},
      {path:'modifytrip',component: ModifyTripsComponent},
      {path:'addstation',component: AddStationsComponent},
      {path:'modifystation',component: ModifyStationsComponent},
      {path:'addtrip',component: AddTripsComponent},
      {path:'deletestation',component: DeleteStationComponent},
      {path:'deletetrip',component: DeleteTripComponent},
      {path:' ', redirectTo:'signup', pathMatch:'full'},
      {path: '**' , redirectTo:'signup', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

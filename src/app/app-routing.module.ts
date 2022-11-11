import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStationsComponent } from './add-stations/add-stations.component';
import { AddTripsComponent } from './add-trips/add-trips.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { ModifyStationsComponent } from './modify-stations/modify-stations.component';
import { ModifyTripsComponent } from './modify-trips/modify-trips.component';
import { StationComponent } from './station/station.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:AdminLoginComponent},
  {path:'signup', component:AdminSignupComponent},
  {path:"trip", component:TripComponent},
  {path:'station',component: StationComponent},
  {path:'modifytrip',component: ModifyTripsComponent},
  {path:'addtrip',component: AddTripsComponent},
  {path:'modifystation',component: ModifyStationsComponent},
  {path:'addstation',component: AddStationsComponent},
  {path:'deletestation',component: DeleteStationComponent},
  {path:'deletetrip',component: DeleteTripComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

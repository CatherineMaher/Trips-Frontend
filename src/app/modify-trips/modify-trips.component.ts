import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-modify-trips',
  templateUrl: './modify-trips.component.html',
  styleUrls: ['./modify-trips.component.css']
})
export class ModifyTripsComponent implements OnInit {
  tripname: String="";
  id:number|undefined;
  end_date:string=""
  start_date:string=""
  from_Station:string=""
  to_Station:string=""
  constructor(private router :Router,private tripService:TripService)
  { }

  ngOnInit(): void {
  }
  modifyTrip(id:number|undefined,start_date:string,end_date:string,from_Station:string,to_Station:string){
    if(id!=null && start_date!=null && end_date!=null && from_Station!=null && to_Station!=null && start_date!="" && end_date!="" && from_Station!="" && to_Station!="")
    {
      this.tripService.modify(id,start_date,end_date,to_Station,from_Station).subscribe(tripname => this.tripname=tripname);
      this.router.navigate([`trip`]);
    }
    else
      alert("error in input")
  }
}

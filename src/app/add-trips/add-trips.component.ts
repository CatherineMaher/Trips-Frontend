import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-add-trips',
  templateUrl: './add-trips.component.html',
  styleUrls: ['./add-trips.component.css']
})
export class AddTripsComponent implements OnInit {
  
  start_date:string=""
  from_Station:string=""
  to_Station:string=""
  end_date:string=""
  stname:String|undefined;
  constructor(private router:Router,private tripService:TripService ) { }

  ngOnInit(): void {
  }
  createTrip(start_date:String,end_date:String,to_Station:String,from_Station:String){
    this.tripService.createTrip(start_date,end_date,to_Station,from_Station).subscribe(stname => this.stname=stname);
    this.router.navigate([`trip`]);
    
  }

}

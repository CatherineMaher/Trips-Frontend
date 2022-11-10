import { Component, OnInit } from '@angular/core';
import { trips } from '../Interfaces/trips';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: trips[] =[];

  constructor(private tripService: TripService) { 
    this.tripService.getTrips().subscribe(trips => this.trips = trips)
  }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(
      {
        next:(_trips) =>{
          this.tripService.getTrips();
        }
      })
      
  }
    
}

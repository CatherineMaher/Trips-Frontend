import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {
  tripname: String | undefined;
  id:number|undefined
  constructor(private router:Router,private tripService:TripService) { }

  ngOnInit(): void {
  }

  deleteTrip(id:number|undefined){
    if(id!=null )
    {
      this.tripService.delete(id).subscribe(tripname => this.tripname=tripname);
      this.router.navigate([`trip`]);
    }
    else
      alert ("wrong input")
  }

}

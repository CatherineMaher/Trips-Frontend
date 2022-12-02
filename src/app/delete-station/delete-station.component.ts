import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../services/station.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css']
})
export class DeleteStationComponent implements OnInit {
  id:number|undefined
  stname:String=""

  constructor(private router:Router,private stationService:StationService) { }

  ngOnInit(): void {
  }

  deleteStation(id:number|undefined){
    if(id!=null)
    {
      this.stationService.delete(id).subscribe(stname => this.stname=stname);
      this.router.navigate([`station`]);
    }
    else
      alert ("wrong input")
  }
}

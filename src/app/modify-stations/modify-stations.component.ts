import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../services/station.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-modify-stations',
  templateUrl: './modify-stations.component.html',
  styleUrls: ['./modify-stations.component.css']
})
export class ModifyStationsComponent implements OnInit {
  id:number|undefined
  stationname:String=""
  name:string=""
  constructor(private router : Router,private stationService:StationService) { }

  ngOnInit(): void {
  }
  modifyStation(id:number|undefined,name:string){
    if(id!=null &&name!=null &&name!="")
    {
      this.stationService.modify(id,name).subscribe(stationname => this.stationname =stationname);
      this.router.navigate([`station`]);
    }
    else
      alert("error in input")
  }
}

import { Component, OnInit } from '@angular/core';
import { station } from '../Interfaces/station';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  stations: station[] =[];

  constructor(private stationServ:StationService) {
    this.stationServ.getStation().subscribe(stations => this.stations = stations)
   }

  ngOnInit(): void {this.stationServ.getStation().subscribe(
    {
      next:(_stations) =>{
        this.stationServ.getStation();
      }
    })
  }

}

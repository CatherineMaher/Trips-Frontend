import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { station } from '../Interfaces/station';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-add-stations',
  templateUrl: './add-stations.component.html',
  styleUrls: ['./add-stations.component.css']
})
export class AddStationsComponent implements OnInit {

  name:String="";
  stations: station[] =[];
  stname:String|undefined;
  constructor(private router:Router,private stationService : StationService) { }

  ngOnInit(): void {
  }
  createStation(name:String){
    this.stationService.getStation().subscribe(
      {
        next:(_stations) =>{
          this.stationService.getStation();
        }
      })
    let station = this.stations.find((station) => {
      return station.name == name;
    });
    console.log(name);
    
    if(name!="" && name!=null  && station == null)
    {
      this.stationService.createStation(name).subscribe(stname => this.stname = stname);
      //console.log(this.stname);
      this.router.navigate([`station`]);
      
    }
}

}

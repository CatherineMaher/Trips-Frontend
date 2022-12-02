import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { trips } from '../Interfaces/trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }
  getTrips(): Observable <trips[]> {

    return this.http.get<trips[]>('http://host.docker.internal:8080/api/v1/trip');
  }

  createTrip(start_date:String,end_date:String,to_Station:String,from_Station:String):Observable<String>{
    return this.http.post<String>(
      `http://host.docker.internal:8080/api/v1/trip/${start_date}/${end_date}/${to_Station}/${from_Station}`,
      {})
  }

  modify(id:number|undefined,start_date:string,end_date:string,from_Station:string,to_Station:string){
    console.log(id,from_Station,to_Station,end_date,start_date);

    return this.http.put<String>(
      `http://host.docker.internal:8080/api/v1/trip/${id}?fromStationName=${from_Station}&toStationName=${to_Station}&endDate=${end_date}&startDate=${start_date}`,
      {}
    )
  }

  delete(id:number){
    return this.http.delete<String>(
      `http://host.docker.internal:8080/api/v1/trip/${id}`
    )
  }
}

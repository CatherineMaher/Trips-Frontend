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
    
    return this.http.get<trips[]>('api/v1/trip');
  }

  createTrip(start_date:String,end_date:String,to_Station:String,from_Station:String):Observable<String>{
    return this.http.post<String>(
      `api/v1/trip/${start_date}/${end_date}/${to_Station}/${from_Station}`,
    {})
  }
}

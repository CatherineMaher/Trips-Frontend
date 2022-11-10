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
}

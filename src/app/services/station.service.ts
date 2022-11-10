import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { station } from '../Interfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http : HttpClient) { }
  
  getStation(): Observable <station[]> {    
    return this.http.get<station[]>('api/v1/station');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { station } from '../Interfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) {
  }

  getStation(): Observable<station[]> {
    return this.http.get<station[]>('http://host.docker.internal:8080/api/v1/station');
  }

  createStation(name: String): Observable<String> {

    return this.http.post<String>(
      `http://host.docker.internal:8080/api/v1/station/${name}`,
      {})
  }

  modify(id: number | undefined, name: string): Observable<String> {
    return this.http.put<String>(
      `http://host.docker.internal:8080/api/v1/station/${id}?name=${name}`,
      {}
    )
  }

  delete(id:number){
    return this.http.delete<String>(
      `http://host.docker.internal:8080/api/v1/station/${id}`
    )
  }
}

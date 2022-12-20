import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from '../Interfaces/admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trips } from '../Interfaces/trips';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  getAdmins(): Observable <admin[]> {
    return this.http.get<admin[]>(environment.apiUrl +'/api/v1/admin');
  }

  createadmin(name:string,email:string,password:string): Observable<String>{
    
    return this.http.post<String>(
      environment.apiUrl +`/api/v1/admin/${name}/${email}/${password}`,
      {})
  }
}

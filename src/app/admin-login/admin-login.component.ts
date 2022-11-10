import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { admin } from '../Interfaces/admin';
import { AdminService } from '../services/admin.service';
import { TripComponent } from '../trip/trip.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  name:string |undefined;
  password:string |undefined;
  admins : admin[] =[];
  flag:boolean=true;
  constructor(private router:Router,private ad:AdminService) { }

  ngOnInit(): void {
    this.ad.getAdmins().subscribe(admins => this.admins = admins);
  }
  SignUp(name?:string , password?:string ){
    this.ad.getAdmins().subscribe(admins => this.admins = admins);
    let obj=this.admins.find((obj) => {
      return obj.name === name;
    });
    
    if(obj?.password==password && password!=null)
      this.router.navigate([`trip`]);
    else
    {
      alert("username or wrong password")
    }
  }

}

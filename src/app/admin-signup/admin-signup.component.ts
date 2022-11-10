import { Component, OnInit } from '@angular/core';
import { admin } from '../Interfaces/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  name:string |undefined;
  password:string |undefined;
  email:string |undefined;
  admins:String|undefined;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
  }

  signUp(name:string|undefined,email:string|undefined,password:string|undefined):void{
    if(name==null||name==""||email==null||email==""||password==null||password=="")
      {
        alert("wrong input please write input in fields")
      }
    else
      {
        this.adminservice.createadmin(name,email,password).subscribe(admins => this.admins = admins);
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.css']
})
export class LogintestComponent implements OnInit {
  user2 : user = {
    _id : "" ,
    id : "",
    name  : "",
    passport: "",
    phone: "",
    age: "",
    country:"" ,
    city: "",
    graduationYear:"" ,
    academicInstitution: "",
    medicalInstitution : "",
    residency: "",
    department : "",
    yearInResidency :"" ,
    password : "",
    role : ""
  };

  constructor(private interSService : InterSService) {
    this.getUser();
   }

  ngOnInit(): void {
    
  }
  getUser(){
    this.interSService. getUser().subscribe(user1 => {this.user2 = user1.user;
       console.log(this.user2);})
   }
 

}
export interface user {
  _id?: any
  id?: any
  name?: any
  passport?: any;
  phone?: any;
  age?: any;
  country?: any;
  city?: any;
  graduationYear?: any;
  academicInstitution?: any;
  medicalInstitution? : any;
  residency?: any;
  department? : any;
  yearInResidency ?: any;
  password ?: any;
  role? : any; 

}

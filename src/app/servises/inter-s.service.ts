import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternC } from '../intern-c';


@Injectable({
  providedIn: 'root'
})
export class InterSService {
 intern = {
 
  id: "",
  name: "",
  passport: "",
  phone: "",
  age: "",
  country: "",
  city: "",
  graduationYear: "",
  academicInstitution: "",
  role : 0,
  
  medicalInstitution : "",
  residency : "",
  department : "",
  yearInResidency : ""
 }
 

  
  data: any ={
    _id : 0,
    id : 0,
    role : 0,
    token : ""
   }


  baceUrl = 'http://localhost:9000/';

  option = {
    headers: {}
  }



  constructor(private httpClient: HttpClient) {


  }


 


  createUser(password: any) {
   
    
    

    return this.httpClient.post(this.baceUrl + "api/create/create", 
     { 
       name : this.intern.name,
      id : this.intern.id,
      passport : this.intern.passport,
      phone : this.intern.phone,
      role : this.intern.role,
      password : password
      }
    ).subscribe(data => {
     
      this.data = data;

      console.log(this. data);

      this.intern.name = this. data.name
     
      this.intern.role = this. data.role
     
      this.option.headers = new HttpHeaders({ 'token':  this. data.token })


    })
  }



  upDateUser() {
    
    

    return this.httpClient.put(this.baceUrl + "api/users/" + this.intern.id,this.intern, this.option).subscribe(data => console.log(data));
    
  }



  getUser(): Observable<any> {


    return this.httpClient.get(this.baceUrl + "api/users/" + this.intern.id, this.option);
  }



  getall(): Observable<any> {
    return this.httpClient.get(this.baceUrl + "api/users/getAll", this.option)

  }


 



  login(id: any, password: any): Observable<any> {


    return this.httpClient.post(this.baceUrl + "api/auth/login", { id: id, password: password });
  }







}




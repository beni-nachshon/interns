import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternC } from '../intern-c';


@Injectable({
  providedIn: 'root'
})
export class InterSService {
  id: any;
  name: any;
  passport: any;
  phone: any;

  age: any;
  country: any;
  city: any;
  graduationYear: any;
  academicInstitution: any;
 
  data2: user = {
    id: "",
    _id: "",
    token : ""

  }
  

  user11 = {};

   intern: any = {};

  baceUrl = 'http://localhost:9000/';
  
  option = {
    headers :{}
  }



  constructor(private httpClient: HttpClient) {
   

  }
  

  add() {
    
    this.intern = new InternC(this.id, this.name, this.passport, this.phone);

  }

  addUser( password : any, headers?: any) {
    console.log(password);
    
    return this.httpClient.post<user>(this.baceUrl + "api/create/create", { id : this.intern.id, name : this.intern. name,
      passport:this.intern. passport, phone: this.intern.phone , password : password , role : 1}).subscribe(data=>{ this.data2 = data
      console.log(data);
      console.log(this.data2.token);

      this.option.headers = new HttpHeaders({'token': this.data2.token})
      

      
     

      
      
      })
  }

  upDateUser(   age: any, country: any, city: any, graduationYear: any, academicInstitution: any,
    medicalInstitution: any, residency: any, department: any, yearInResidency: any, headers? :object): Observable<object> {

    return this.httpClient.put(this.baceUrl + "api/users/" + this.data2._id, {
      age: age, country: country, city: city, graduationYear: graduationYear,
      academicInstitution: academicInstitution, medicalInstitution: medicalInstitution, residency: residency,
      department: department, yearInResidency: yearInResidency
    },this.option)
  }

  getUser() : Observable <any> {
    
    
    return this.httpClient.get(this.baceUrl + "api/users/" + this.data2.id,this.option);
  }
    
    ;


  

  upDatePassword(password: any) {
    console.log(password);

    return this.httpClient.put(this.baceUrl + "api/users/" + this.data2._id, { password: password }).subscribe(data => console.log(data));

  }

  login(id: any, password: any): Observable<any> {
    console.log(password);

    return this.httpClient.post(this.baceUrl + "api/auth/login", { id: id, password: password });
  }

  getOptions(headers? : any) {
    headers = headers? headers:  {};
    headers['content-type'] = 'application/json';
   
    
    headers['x-access-token'] = this.data2. token;
console.log( headers['x-access-token']);

    
    return {
      headers: new HttpHeaders(headers)
      
      
    }
  }


  

}
export interface user {
  id?: string,
  _id?: string,
  token? :any

}



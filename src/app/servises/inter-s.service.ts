import { HttpClient } from '@angular/common/http';
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
  counter = -1;
  age: any;
  country: any;
  city: any;
  graduationYear: any;
  academicInstitution: any;
 
  data2: user = {
    id: "",
    _id: ""

  }
  

  user11 = {};

  public internsArray: any = [{}];

  baceUrl = 'http://localhost:9000/'



  constructor(private httpClient: HttpClient) {

  }

  add() {
    this.counter++;
    this.internsArray[this.counter] = new InternC(this.id, this.name, this.passport, this.phone);

  }

  addUser(id: any, name: any, passport: any, phone: any): Observable<object> {
    return this.httpClient.post<user>(this.baceUrl + "api/users/create", { id: id, name: name, passport: passport, phone: phone })
  }

  upDateUser(age: any, country: any, city: any, graduationYear: any, academicInstitution: any,
    medicalInstitution: any, residency: any, department: any, yearInResidency: any): Observable<object> {

    return this.httpClient.put(this.baceUrl + "api/users/" + this.data2._id, {
      age: age, country: country, city: city, graduationYear: graduationYear,
      academicInstitution: academicInstitution, medicalInstitution: medicalInstitution, residency: residency,
      department: department, yearInResidency: yearInResidency
    })
  }

  getUser() : Observable <any> {
    console.log(typeof this.data2.id);
    
    return this.httpClient.get(this.baceUrl + "api/users/" + this.data2.id);
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

}
export interface user {
  id?: string,
  _id?: string

}


import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {
  name : any;
  age : any;
  country : any;
  city : any;
  graduationYear : any;
  academicInstitution : any;


  constructor(private  interSService :  InterSService) {
   
    this.name = this.interSService.intern.name;
     }

  ngOnInit(): void {
  }
  add(){
   this.interSService.age = this. age ;
   this.interSService. country = this.country;
   this.interSService. city = this.city;
   this.interSService.graduationYear = this.graduationYear;
   this.interSService.academicInstitution = this.academicInstitution;

  }

}

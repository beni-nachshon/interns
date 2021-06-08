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
  saveInputsInService(){
   this.interSService.intern.age = this. age ;
   this.interSService.intern. country = this.country;
   this.interSService.intern. city = this.city;
   this.interSService.intern.graduationYear = this.graduationYear;
   this.interSService.intern.academicInstitution = this.academicInstitution;

  }

}

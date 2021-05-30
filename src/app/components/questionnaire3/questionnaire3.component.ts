import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-questionnaire3',
  templateUrl: './questionnaire3.component.html',
  styleUrls: ['./questionnaire3.component.css']
})
export class Questionnaire3Component implements OnInit {
  medicalInstitution : any;
  residency: any;
  department : any;
  yearInResidency : any;
  constructor(private  interSService :  InterSService) { }

  ngOnInit(): void {
  }
  add(){
 
   this.interSService.upDateUser( this.interSService. age , this.interSService. country ,this.interSService. city,
    this.interSService. graduationYear, this.interSService. academicInstitution,this.medicalInstitution,
   this.residency,this.department,this.yearInResidency ).subscribe(data =>  { console.log(data)})

  }

}

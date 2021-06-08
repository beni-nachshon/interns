import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private  interSService :  InterSService , private router : Router) { }

  ngOnInit(): void {
  }
  saveInputsInService(){
    this.interSService.intern. medicalInstitution = this.medicalInstitution;
    this.interSService.intern. residency = this.residency;
    this.interSService.intern.department = this.department;
    this.interSService.intern.yearInResidency = this.yearInResidency;
    this.interSService.upDateUser();
    this.router.navigate(['/Logintest'])
  }
}
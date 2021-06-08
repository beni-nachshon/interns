import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private interSService : InterSService) {
    this.interSService.intern.role = 1;
  
   }

  ngOnInit(): void {
  }
 

}

import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-questionnaire4',
  templateUrl: './questionnaire4.component.html',
  styleUrls: ['./questionnaire4.component.css']
})
export class Questionnaire4Component implements OnInit {
 
  
  constructor(private  interSService :  InterSService) {
  

   }

  ngOnInit(): void {
  }
 

}


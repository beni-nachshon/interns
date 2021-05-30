import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-questionnaire1',
  templateUrl: './questionnaire1.component.html',
  styleUrls: ['./questionnaire1.component.css']
})
export class Questionnaire1Component implements OnInit {
name : any;
 
  constructor(private interSService : InterSService) { 
    this.name = this.interSService.internsArray[this.interSService.counter].name;
  }

  ngOnInit(): void {
  }

}

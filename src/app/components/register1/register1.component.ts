import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  id :any;
  name  : any;
  passport : any;
  phone : any;
  
  

  

  constructor(private interSService : InterSService  ) { }
  
  ngOnInit(): void {
   
  }
  add(){
    
    this.interSService. id = this. id;
    this.interSService. name= this. name;
    this.interSService.  passport= this.  passport;
    this.interSService. phone = this. phone;
    this.interSService. add();
   
   
   
    
  }

}


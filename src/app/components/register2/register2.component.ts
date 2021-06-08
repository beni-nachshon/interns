import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterSService } from '../../servises/inter-s.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  num1 : any;
  num2 : any;
  num3 : any;
  num4 : any;

  name : any;
 




  constructor(private  interSService :  InterSService , private router : Router) {
this.name = this.interSService.intern.name;

   }

  ngOnInit(): void {
  }
  PasswordAuthentication()
  {
  //  if(this. num1 == this.interSService.internsArray[this.interSService.counter].password1 && 
  //     this. num2 == this.interSService.internsArray[this.interSService.counter].password2 && 
  //     this. num3 == this.interSService.internsArray[this.interSService.counter].password3 && 
  //     this. num4 == this.interSService.internsArray[this.interSService.counter].password4 )
  //     {
      
        
        this.router.navigate(["/Password"]);

        
      // }
      // else{
      
      //  alert("Incorrect password, Please try again")
        
      // }

    

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterSService } from '../../servises/inter-s.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  id :any;
  name  : any;
  passport : any;
  phone : any;
num1 : any;
num2 : any;
num3 : any;
num4 : any;
password : any;


data1 = {}

  constructor(private  interSService :  InterSService , private router : Router) {

  this.id = this.interSService.intern.id;
  this.name = this.interSService.intern.name;
  this.passport = this.interSService.intern.passport;
  this.phone = this.interSService.intern.phone;
   }

  ngOnInit(): void {
  }
  check()
  {
  //  if(this. num1 == this.interSService.internsArray[this.interSService.counter].password1 && 
  //     this. num2 == this.interSService.internsArray[this.interSService.counter].password2 && 
  //     this. num3 == this.interSService.internsArray[this.interSService.counter].password3 && 
  //     this. num4 == this.interSService.internsArray[this.interSService.counter].password4 )
  //     {
        // this.interSService. addUser(this.id,this.name,this.passport,this.phone).subscribe(data=>
        //   {console.log( data);  this.interSService.data2 = data;
        //   console.log(this.interSService.data2);
        //     })
        
        this.router.navigate(["/Password"]);

        
      // }
      // else{
      
      //  alert("Incorrect password, Please try again")
        
      // }

    

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private interSService : InterSService , private router : Router) { 
     
  }

  ngOnInit(): void {

  }
  check(id : any , password : any){
    console.log(password);
    this.interSService.data2.id = id;
    
this.interSService.login(id , password).subscribe(login1=>{console.log(login1);
  if( ! login1){
    
    console.log("Authentication failed");
    alert("Authentication failed");
  }
  else{
    this.interSService.data2.token = login1;
    this.router.navigate(["/Logintest"])
    
  }
})
  }

   

 

}

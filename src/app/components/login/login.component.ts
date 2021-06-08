import { HttpHeaders } from '@angular/common/http';
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
  Authentication(id : any , password : any){
    
    this.interSService.intern.id = id;
    
this.interSService.login(id , password).subscribe(login=>{
  console.log(login);
  
  if( ! login){
    
    console.log("Authentication failed");
    alert("Authentication failed");
  }
  else{
 
 this.interSService.option.headers = new HttpHeaders({ 'token': login.token })
 this.interSService.intern.role = login.role;
 
 
 

 if(this.interSService.intern.role > 1){
  this.router.navigate(["/GetAll"])
 }

else{

  this.router.navigate(["/Logintest"])
}
 
    
  }
})
  }

   

 

}

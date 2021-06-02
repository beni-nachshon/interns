import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
name : any;
  constructor(private interSService : InterSService ) {
   this.name = this.interSService.name; 
   }

  ngOnInit(): void {
  }
  addPassword(password : any){
    console.log(password);
    
    // this.interSService.upDatePassword(password);
    this.interSService. addUser(password)


      }

}

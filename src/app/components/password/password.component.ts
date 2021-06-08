import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  name : any;
  constructor(private interSService: InterSService, private router: Router) {
    this.name = this.interSService.intern.name;
  }

  ngOnInit(): void {
  }
  addPassword(password: any) {

    this.interSService.createUser(password)

    if (this.interSService.intern. role == 1) {
      this.router.navigate(['/questionnaire1'])
    }
    else {
      this.router.navigate(['/GetAll'])
    }




  }

}

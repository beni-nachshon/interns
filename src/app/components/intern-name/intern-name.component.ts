import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-intern-name',
  templateUrl: './intern-name.component.html',
  styleUrls: ['./intern-name.component.css']
})
export class InternNameComponent implements OnInit {
name :any;
  constructor(private  interSService : InterSService ) { 
    this.name = this.interSService.intern.name;
  }

  ngOnInit(): void {
  }

}

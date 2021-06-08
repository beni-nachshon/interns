import { Component, OnInit } from '@angular/core';
import { InterSService } from 'src/app/servises/inter-s.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
data : any;
  constructor(private  interSService : InterSService) { }

  ngOnInit(): void {
  }
  getAll(){
    this.interSService.getall().subscribe(data =>{this.data = data 
    
    
    })

  }


}

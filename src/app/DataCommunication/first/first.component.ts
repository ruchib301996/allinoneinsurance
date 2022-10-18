import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // sampleData:any;
  sampleFirstData:any;
data:any
  constructor( private dataSer: DataServiceService, private router:Router) { 
    this.dataSer.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }
  
  ngOnInit(): void {
  }
  sendDtFromFirst(){
    this.sampleFirstData="This data is from First to Second component";
    this.dataSer.setMessage(this.sampleFirstData);
    this.router.navigate(['second']);
  }
}

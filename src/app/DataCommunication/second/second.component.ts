import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
data:any;
  constructor(private dataSe: DataServiceService, private router: Router) { 
    this.dataSe.getMessage().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }

  ngOnInit(): void {
  }
sendDataFromSecond(){
  let dt= "this is the data from second component to First component";
  this.dataSe.setMessage(dt);
  this.router.navigate(['first']);
}
}

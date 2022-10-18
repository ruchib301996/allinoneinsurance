import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {

  constructor(private api:ApiService){

  }
    demostring:any= "Hello Angular testing";

    checkFlag:boolean=false;
    subject:any=['js', 'HTML', 'CSS'];
    subjectFlag:boolean= true;
    data:any;
  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updateData();
    this.deleteData();
  }
  
getData(){
    this.api.getApiData().subscribe(
      (res:any)=>{console.log(res)},
      (err:any)=>{console.log(err)}
    )
}

sendData(){
  this.data={
    name:'Vishakha',
    job:'dpt Manager',
    collegeName:'Vishwakarma UVT'
  }
  this.api.sendApiData(this.data).subscribe(
    (res:any)=>{console.log(res);}
  )
}

updateData(){
  this.data={
    name:'Pallavi',
    job:'HOD'
  }
  let id=2;
  this.api.updateApiData(this.data, id).subscribe(
    (res:any)=>{console.log(res);}
  )
}

deleteData(){
  let idd=2;
    this.api.deleteApiData(idd).subscribe(
      (res:any)=>{
        console.log('Data Deleted Successfully')
        console.log(res)},
      (err:any)=>{console.log(err)}
    )
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
stafName:any;
stafId:any;
stafAge:any;
  constructor(private actRout: ActivatedRoute) { 
    //to fetch the rout data we have two options
    //Rout Param and Param Map
    //1. Rout param (it gives direct data)
    console.log(this.actRout.snapshot.params);
    // this.stafId=this.actRout.snapshot.params['id'];
    // this.stafName=this.actRout.snapshot.params['name'];
    // this.stafAge=this.actRout.snapshot.params['age'];


    //2 Param map (it gives data in terms of observable)
    console.log(this.actRout.paramMap);
    this.actRout.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.stafId=res.params.id;
      this.stafName=res.params.name;
      this.stafAge=res.params.age;

    })

  }

  ngOnInit(): void {
  }

}

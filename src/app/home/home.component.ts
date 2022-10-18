import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
stafData:any = [
  {name:'Ruchita', age:25, id:1100},
  {name:'Sujata', age:26, id:1200},
  {name:'Kaveri', age:24, id:1300},
  {name:'Ashwini', age:23, id:1400},
  {name:'Rutuja', age:27, id:1500}


]
  ngOnInit(): void {
  }
  showstafData(x:any){
    console.log('Received data from backend and displayed the details in tabular format');
    console.log(x);
    let id=x.id;
    let name=x.name;
    let age=x.age;
    this.router.navigateByUrl(`staf/${id}/${name}/${age}`);
  }

}

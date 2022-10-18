import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  checkFlag:boolean=false;

  constructor(private router:Router){

  }

  navigatetoStud(){
if (this.checkFlag==true){
  // this.router.navigate(['stud']);
  // this.router.navigateByUrl('stud');
  // this.router.navigate(['staf']);
  this.router.navigateByUrl('products');
}
else{
  this.router.navigate(['error']);
}
  }
}

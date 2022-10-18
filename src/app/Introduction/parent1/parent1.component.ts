import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
dataFromParentToChild1:any;
dataFromChildToParent1:any

  constructor() {
    this.dataFromParentToChild1='this is simple card';
   }

  ngOnInit(): void {
  }
  emitDataFromchild(ev:any){
    console.log('data from C to P');
    console.log(ev);
    this.dataFromChildToParent1=ev;
  }
}

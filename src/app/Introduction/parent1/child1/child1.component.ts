import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() data:any;
@Output() itemEvent = new EventEmitter<any>();
dataFromChildToParent1:any
dataFromParentToChild1:any
  constructor() {
    this.dataFromChildToParent1='data from Child to Parent';
   }

  ngOnInit(): void {
  }
  dataFromChildToParent(){
console.log('this data from child to parent');
this.itemEvent.emit(this.dataFromChildToParent1);
  }
}

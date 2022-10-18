import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:any;

  @Output() itemEvent = new EventEmitter<any>();

dataFromChildToParent:any;
dataFromParentToChild: any;
  constructor() { 
    this.dataFromChildToParent = "This is the data from Child to Parent component";
  }

  ngOnInit(): void {
  }
  sendDataFromParent(){
    console.log("Hi");
    this.itemEvent.emit(this.dataFromChildToParent);
  }
}

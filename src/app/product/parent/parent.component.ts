import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  dataFromParentToChild:any
  dataFromChildToParent:any;

  @ViewChild(ChildComponent) childCmp:any;
  constructor() {
    this.dataFromParentToChild = "This is the data from parent to child component";
   }

  ngOnInit(): void {  
  }
  emitDataFromchild(ev:any){
    console.log("Hello this is custom event");
    console.log(ev);
    this.dataFromChildToParent= ev;
  }
  ngAfterViewInit(): void {
    console.log(this.childCmp.dataFromChildToParent);
  }
}

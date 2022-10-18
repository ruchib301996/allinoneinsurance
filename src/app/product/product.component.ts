import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataFromParentToChild:any
  dataFromChildToParent:any;

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
}

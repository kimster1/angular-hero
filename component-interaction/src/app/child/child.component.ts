import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
     <p>{{paramOneVal}}</p>
     <p>{{paramTwo}}</p>
  `,
 // styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  private paramOneVal:any;


  @Input() 
  set paramOne(val:any){
    this.paramOneVal=val;
  }；
  get paramOne(){
    return this.paramOneVal;
  }

  @Input () paramTwo : any;

  ngOnChanges(changes:{[proKey:string]:SimpleChange}){
     for(let propName in changes){
        let changeProp=changes[propName];
        let to = JSON.stringify(changeProp.currentValue);
        if(changedProp.isFirstChange()){
             console.log(`Initial value of ${propName} set to ${to}`);

        }else{
            let from=JSON.stringify(changedProp.previousValue);
            console.log(`${propName}changed from ${from} to ${to}`);
        }
     }
  }

}

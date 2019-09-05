import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
     <p>{{paramOneVal}}</p>
     <p>{{paramTwo}}</p>
  `,
 // styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  private paramOneVal:any;


  @Input() paramOne: any;//输入属性1
  @Input() paramTwo: any;//输入属性2

}

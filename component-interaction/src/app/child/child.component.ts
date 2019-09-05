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


  1111@Input() paramOne: any;//输入属性123
  @Input() paramTwo: any;//输入属性2

}

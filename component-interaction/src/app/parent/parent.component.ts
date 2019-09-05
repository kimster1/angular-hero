import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child [paramOne]='paramOneVal'  [paramTwo]='paramTwoVal'></app-child>`,
  //styleUrls: ['./parent.component.css']
})
export class ParentComponent {

      paramOneVal: any='传递给paramOne的数据';
      paramTwoVal: any='传递给paramTwo的数据'；
  

}

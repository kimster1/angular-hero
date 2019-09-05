import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>{{paramOne}}</p>
    <p>{{paramTwo}}</p>
  `
})
export class ParentComponent {

      paramOneVal: any;
      paramTwoVal: any;

      constructor(public appParent:AppParentComponent){
             this.paramOne=appParent.paramOneVal;
             this.paramTwo=appParent.paramTwoVal;
      }

}
//父子组件可以通过服务来通讯，父子组件共享一个服务，利用该服务在组件家族内部
//实现双向通讯

//父组件可以调用@ViewChild()来通讯，局限性：父组件-子组件的连接必须全部在父组件模板中进行，
//父组件本身的代码对子组件没有访问权。

//子组件暴露一个EventEmitter属性，当事件发生时，子组件利用该属性emit事件
//子组件通过@Output()定义输出属性ready
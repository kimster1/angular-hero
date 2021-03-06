import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,AfterViewInit,AfterViewChecked {
  
  ngAfterViewInit(): void {
      console.log("父组件的视图初始化完毕");
      setTimeout(()=>{
        this.message="Hello";
      },0);
  }
ngAfterViewChecked(): void {
    console.log("父组件的视图变更检测完毕")；
  }
  @ViewChild("child1")
   child1:ChildComponent;

  constructor(){}
  
  ngOnInit():void{
    this.child1.greeting("Tom");

  }

}

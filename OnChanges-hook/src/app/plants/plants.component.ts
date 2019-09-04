import { Component, OnInit,  Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit,OnChanges{
 
  
   @Input()
   greeting:string;
 
    @Input()
    user:{name:string};

    message:string = "初始化消息";

  constructor() { }

  ngOnInit() {
   
  }
 ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(JSON.stringify(changes,null,2));
  }
}

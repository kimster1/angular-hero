import { Component, OnInit,  Input, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit,OnChanges,DoCheck{
 
 
  
   @Input()
   greeting:string;
 
    @Input()
    user:{name:string};

    message:string = "初始化消息";

    oldUsername:string;
    changeDetected:boolean=false;
    noChangeCount:number =0;

  constructor() { }

  ngOnInit() {
   
  }
 ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("hello"+JSON.stringify(changes,null,2));
  } 
  
  ngDoCheck(): void {
      if(this.user.name!==this.oldUsername){
        this.changeDetected=true;
        console.log("DoCheck:user.name从"+this.oldUsername+"变为"+this.user.name);
        this.oldUsername=this.user.name;
      }
         if(this.changeDetected){
           this.noChangeCount=0;
         } else{
           this.noChangeCount=this.noChangeCount+1;
           console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用"+this.noChangeCount)
         }
         this.changeDetected=false;
  }
}

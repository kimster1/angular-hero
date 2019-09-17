import { Component, OnInit } from '@angular/core';
import{heroes} from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   heroes=heroes;
  constructor() { }

  ngOnInit() {
  }

}

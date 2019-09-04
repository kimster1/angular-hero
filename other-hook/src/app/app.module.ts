import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import{Routes}  from "@angular/router";

  var routerConfig:Routes=[
      {path:'',component:Child1Component},
      {path:'',component:Child1Component}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

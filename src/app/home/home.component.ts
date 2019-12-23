import { Component, OnInit } from '@angular/core';
import { People } from '../models/people.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public people:People[] 
  public currentTab:string = 'getData'
  public activeTabOne:boolean = true
  public activeTabTwo:boolean = false

  constructor() { }

  ngOnInit() {
  }

  tabOne(tab:string){
    this.activeTabOne = true
    this.activeTabTwo = false
    this.currentTab = tab
  }
  
  tabTwo(tab:string){
    this.activeTabOne = false
    this.activeTabTwo = true
    this.currentTab = tab
  }

}

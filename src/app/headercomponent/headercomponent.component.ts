import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  constructor() {
     
this.navItems=["Home","Register","Login"];
  }

  ngOnInit() {
  }
  navItems:Array<String>;
}
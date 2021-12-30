import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 link:number=1;

  constructor() { }
  change(num:number){
    this.link=num;
  }

  ngOnInit(): void {
   
  }

}

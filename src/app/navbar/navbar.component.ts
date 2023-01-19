import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado: Boolean = false

  constructor() { }

  ngOnInit(): void {
    sessionStorage.getItem("currentUser");

    if(sessionStorage.getItem("currentUser")){
      this.logueado = true;
    }
    else{
      this.logueado = false;
    }
  }

}

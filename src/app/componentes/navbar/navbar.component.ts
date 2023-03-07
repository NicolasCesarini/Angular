import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../../servicios/autentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado: any;

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null") {
      this.logueado = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.logueado = false;
    } else {
      this.logueado = true;
    }
  }
}

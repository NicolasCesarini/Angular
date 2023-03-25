import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { AutenticationService } from '../../servicios/autentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado: any;
  index: any;
  personas: Persona[]=[] //la entidad Persona
  httpClient: any;

  constructor(private sPersona: PersonaService) { }

  ngOnInit(): void {
    this.lista();

    if (sessionStorage.getItem('currentUser') == "null") {
      this.logueado = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.logueado = false;
    } else {
      this.logueado = true;
    }

    if (window.location.href == "https://portfolio-frontend-nicolas.web.app/dashboard"){
      this.index = false;
    } else if(window.location.href == "https://portfolio-frontend-nicolas.web.app/login"){
      this.index = false;
    } else{
        this.index = true;
    }
    
  }

  lista():void{
    this.sPersona.verPersonas().subscribe(data => {this.personas=data});
  }

  redirect(pagina:string){
    window.location.href=pagina
  }
  
  
}

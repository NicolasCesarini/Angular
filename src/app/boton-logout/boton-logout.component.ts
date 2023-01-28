import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-boton-logout',
  templateUrl: './boton-logout.component.html',
  styleUrls: ['./boton-logout.component.css']
})
export class BotonLogoutComponent implements OnInit {
  modoEdit:any;
  persona: any;
  constructor(private ruta: Router ,private personaService: PersonaService) { }

  ngOnInit(): void {
 
      this.personaService.verPersonas().subscribe(data =>{
        this.persona = data
      });
      if (sessionStorage.getItem('currentUser') == null){
        this.modoEdit = false;
      }else if (sessionStorage.getItem('currentUser') == "null"){
        this.modoEdit = false;
      }
  }

cerrarSesion(){
  sessionStorage.setItem('currentUser',"null");
  this.modoEdit = false;
  alert("SESIÓN CERRADA");

  window.sessionStorage.removeItem;
  
  this.ruta.navigate(['/']);
  window.location.reload();
}
}

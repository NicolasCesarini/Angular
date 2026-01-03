import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../entidades/persona';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  personas: Persona[]=[] //la entidad Persona
  httpClient: any;
  
  constructor(private sPersona: PersonaService) {}

  ngOnInit(): void {
    this.lista();
  }

  lista():void{
    this.sPersona.verPersonas().subscribe(data => {
      this.personas = data.slice().reverse();
    });
  }



}

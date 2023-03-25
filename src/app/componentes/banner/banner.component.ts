import { Component, OnInit } from '@angular/core';
import { Persona } from '../../entidades/persona';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  personas: Persona[]=[] //la entidad Persona

  constructor(private sPersona: PersonaService) { }

  ngOnInit(): void {
    this.lista();
  }

  lista():void{
    this.sPersona.verPersonas().subscribe(data => {this.personas=data});
  }

}
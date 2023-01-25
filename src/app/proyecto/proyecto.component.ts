import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../entidades/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyectos: Proyecto[]=[] //se llama a la entidad Proyecto

  constructor(private sProyecto: ProyectoService) { } //se llama al servicio Proyecto

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarProyecto();
  }

  //llamamos a los métodos

  public cargarProyecto():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sProyecto.verProyectos().subscribe(data => {this.proyectos=data}); // uso el this porque esta fuera del método
  }

}
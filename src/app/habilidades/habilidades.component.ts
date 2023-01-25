import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../entidades/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[]=[] //se llama a la entidad Habilidad
  
  constructor(private sHabilidad: HabilidadService) { } //se llama al servicio Habilidad

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarHabilidad();
  }

  //llamamos a los métodos

  public cargarHabilidad():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sHabilidad.verHabilidades().subscribe(data => {this.habilidades=data}); // uso el this porque esta fuera del método
  }

}

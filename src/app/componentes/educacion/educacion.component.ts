import { Component, OnInit } from '@angular/core';
import { Estudio } from '../../entidades/estudio';
import { EstudioService } from '../../servicios/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  estudios: Estudio[]=[] //se llama a la entidad Habilidad
  
  constructor(private sEstudio: EstudioService) { } //se llama al servicio Habilidad

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarEstudio();
  }

  //llamamos a los métodos

  public cargarEstudio():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sEstudio.verEducacion().subscribe(data => {this.estudios=data}); // uso el this porque esta fuera del método
  }
}

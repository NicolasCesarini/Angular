import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../entidades/experiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[]=[] //se llama a la entidad Experiencia
  
  constructor(private sExperiencia: ExperienciaService) { } //se llama al servicio Experiencia

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarExperiencia();
  }

  //llamamos a los métodos

  public cargarExperiencia():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sExperiencia.verExperiencias().subscribe(data => {
      this.experiencias = data.slice().reverse();
    }); // uso el this porque esta fuera del método
  }

  public borrar(id:number){
    if(id != undefined){
      this.sExperiencia.borrarExperiencia(id).subscribe(
        data =>{
          // alert("Experiencia eliminada correctamente)
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo elmiminar la experiencia")
        }
      )
    }
  }
}

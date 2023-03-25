import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/entidades/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  redes: Redes[] = [] //se llama a la entidad Redes

  constructor(private sRedes: RedesService) { } //se llama al servicio Redes

  ngOnInit(): void { //se hace cuando se inicia la página
    this.cargarRedes();
  }

  //llamamos a los métodos

  public cargarRedes(): void {   //no va a haber ningun retorno, solo una carga de datos
    this.sRedes.verRedes().subscribe(data => { this.redes = data }); // uso el this porque esta fuera del método
  }
}

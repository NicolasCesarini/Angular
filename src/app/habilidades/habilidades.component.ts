import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

    // Inicializar array progresos (pongo any porque es datos de todo tipo, ya sea texto, número o booleano)
    progresos: any = [];
  

  constructor(
    // Inyectar el Servicio para tener acceso en la clase a los Métodos
  private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.portfolioService.getDatos().subscribe(portfolio => { // este portfolio es un componente le podria poner el nombre que quiera
      // console.log(portfolio); (ya no lo necesitamos)
      // Definir variables a mostrar
      // this.progresos(variable que puse en el html cuando puse let progreso of progresos)=portfolio.progresos(este es el array de progresos que esta dentro del ts portfolio);
      this.progresos=portfolio.progresos;

    
  });
  }

}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  nombre: string = '';
  apellido: string = '';
  acerca_de_mi: string = '';
  
  constructor(
    // Inyectar el Servicio para tener acceso en la clase a los Métodos
  private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      // this.infoPortfolio=datos.uno;
      this.nombre=portfolio.nombre;
      this.apellido=portfolio.apellido;
      this.acerca_de_mi=portfolio.acerca_de_mi;
  });
  }

}

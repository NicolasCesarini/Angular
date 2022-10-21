import { Injectable } from '@angular/core';
// Esto es para subscribirse y recibir respuesta de forma asíncrónica
import { Observable } from 'rxjs';
// Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // El primer http se llama alias
  constructor(private http:HttpClient) { }

  // Método observable que devuelve los datos
getDatos():Observable<any> {
  // Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  return this.http.get('./assets/json/portfolio.json');
}

}
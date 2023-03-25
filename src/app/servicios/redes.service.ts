import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../entidades/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url='https://portfolio-backend-gzc8.onrender.com/redes/'
  constructor(private httpClient:HttpClient) { }

  public verRedes(): Observable<Redes[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Redes[]>(this.url + 'lista');
  }

  public verRed(id: number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.url + `ver/${id}`)
  }

  public agregarRed(red: Redes): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', red); //eso es por el RequestBody
  }

  public borrarRed(id: number): Observable<Redes>{
    return this.httpClient.delete<Redes>(this.url + `borrar/${id}`)
  }

  public updateRed(id:number, red: Redes): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, red); //es igual al crear pero con put en vez de post
  }
}

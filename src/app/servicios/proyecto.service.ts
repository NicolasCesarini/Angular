import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url='https://portfolio-backend-gzc8.onrender.com/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public verProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`)
  }

  public agregarProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto); //eso es por el RequestBody
  }

  public borrarProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.delete<Proyecto>(this.url + `borrar/${id}`)
  }

  public updateProyecto(id:number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, proyecto); //es igual al crear pero con put en vez de post
  }
}
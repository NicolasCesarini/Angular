import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url='http://localhost:8080/habilidad/'
  constructor(private httpClient:HttpClient) { }

  public verHabilidades(): Observable<Habilidad[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public verHabilidad(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`)
  }

  public agregarHabilidad(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad); //eso es por el RequestBody
  }

  public borrarHabilidad(id: number): Observable<Habilidad>{
    return this.httpClient.delete<Habilidad>(this.url + `borrar/${id}`)
  }

  public updateHabilidad(persona: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona); //es igual al crear pero con put en vez de post
  }
}

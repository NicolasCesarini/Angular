import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='https://portfolio-backend-gzc8.onrender.com/persona/'
  constructor(private httpClient:HttpClient) { }

  public verPersonas(): Observable<Persona[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public verPersona(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`)
  }

  public agregarPersona(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona); //eso es por el RequestBody
  }

  public borrarPersona(id: number): Observable<Persona>{
    return this.httpClient.delete<Persona>(this.url + `borrar/${id}`)
  }

  public updatePersona(id:number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, persona); //es igual al crear pero con put en vez de post
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='https://portfolio-backend-gzc8.onrender.com/experiencia/'
  constructor(private httpClient:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{ //importacion desde la entidad experiencia
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public verExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`)
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia); //eso es por el RequestBody
  }

  public borrarExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.delete<Experiencia>(this.url + `borrar/${id}`)
  }

  public updateExperiencia(id:number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, experiencia); //es igual al crear pero con put en vez de post
  }

}

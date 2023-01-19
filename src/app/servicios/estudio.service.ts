import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  url='http://localhost:8080/educacion/'
  constructor(private httpClient:HttpClient) { }

  public verEducacion(): Observable<Estudio[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public verEstudio(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `ver/${id}`)
  }

  public agregarEducacion(educacion: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion); //eso es por el RequestBody
  }

  public borrarEducacion(id: number): Observable<Estudio>{
    return this.httpClient.delete<Estudio>(this.url + `borrar/${id}`)
  }

  public updateEducacion(id:number, educacion: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, educacion); //es igual al crear pero con put en vez de post
  }
}

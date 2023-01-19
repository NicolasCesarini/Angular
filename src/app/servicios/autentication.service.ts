import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  url="http://localhost:8080/persona/autentication/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  loginPersona(credenciales:any): Observable<any>{
    var httpOptions={headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
    sessionStorage.setItem('currentUser',JSON.stringify(data));
    this.currentUserSubject.next(data);
    console.log("Servicio esta corriendo" + JSON.stringify(data));
    return data
    }));
  }

  get usuarioAutenticado(){  
    return this.currentUserSubject.value;
  }
}
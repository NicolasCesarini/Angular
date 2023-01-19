import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio: AutenticationService, private rutas: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.autenticacionServicio.usuarioAutenticado;

    if(currentUser && currentUser.id){
      //this.rutas.navigate(['/dashboard'])
      return true;
    }
    else{
      this.rutas.navigate(['/'])
      return false;
      
    }
  }
  
}
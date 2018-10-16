import { AuthService } from './../login/auth.service';
import { Alert } from 'selenium-webdriver';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /*const  valorStorage =  (localStorage.getItem('nomeUser'));


  if (valorStorage) {this.check = true;  }*/
  constructor(
    private authService: AuthService,
    private router: Router
  ) {


   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if ( this.authService.check) { return true;  }
    this.router.navigate(['/'] );
    return false;
  }
}

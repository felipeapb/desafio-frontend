import { AuthService } from './../login/auth.service';

import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { Router } from '@angular/router';




/*import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
*/



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public check: Boolean ;


   usuario: Usuario = new Usuario() ;

  constructor(
    private authService: AuthService,
    private router: Router,) {

    const nomeUser = localStorage.getItem('nomeUser');

    if ( nomeUser !== null) {
     this.check = true; this.router.navigate(['/logado'] ); } else { this.check = false; }
   }

  ngOnInit() {

  }
  
  fazerLogin() {
   // console.log (this.usuario);
    this.authService.fazerLogin(this.usuario);

  }

  

}


import { Http } from '@angular/http';
import { Usuario } from '../login/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import 'rxjs/add/operator/toPromise';
import { Alert } from 'selenium-webdriver';
import * as $ from 'jquery';




@Injectable({
  providedIn: 'root'
})




export class AuthService {

public check: Boolean ;
  private  usuarioAutenticado = false;

  constructor(
    private router: Router,
    private http: Http,
    ) {

      const nomeUser = localStorage.getItem('nomeUser');
      // alert(nomeUser);

      if ( nomeUser !== null) {
  this.check = true; } else { this.check = false; }

     }

  fazerLogin(usuario: Usuario) {

    this.http.post('http://localhost:3000/api/user/login', usuario)
    .toPromise()
    .then(response => this.validar(response.json().firstName), response =>  this.validar(false) )

    ;
  }


  validar(valor) {


    if ( valor  !== false) {
      this.check = true;
      console.log(this.check);
      console.log(valor);
      this.usuarioAutenticado = true;
      this.router.navigate(['/logado']);
      window.localStorage['nomeUser'] = valor;

      $(document).ready(function() {

        $('.mserro').hide();
              });


    }     else {
      this.usuarioAutenticado = false;
      $(document).ready(function() {

$('.mserro').show();
      });
      this.router.navigate(['/login']);


    }

  }

}

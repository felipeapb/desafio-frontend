import { AuthService } from './../login/auth.service';

import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';




/*import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
*/



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   usuario: Usuario = new Usuario() ;

  constructor(private authService: AuthService) {


   }

  ngOnInit() {

  }
  fazerLogin() {
   // console.log (this.usuario);
    this.authService.fazerLogin(this.usuario);

  }

}


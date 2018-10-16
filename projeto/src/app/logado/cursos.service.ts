import { Http } from '@angular/http';
import { Curso } from './../login/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CursosService {

private readonly API = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

list() {
return this.http.get<Curso[]>(this.API + 'curso');
  }
}

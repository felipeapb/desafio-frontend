import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './../app-http.service';
import { Curso } from './../login/curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


import { join } from 'path';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import * as $ from 'jquery';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

public usuario = {

  nome: '' ,
  inicio: '',
  fim: '',
  salas: '' ,
  professores: ''
};
idvalor = '';

public listarprofessores: any = [];
public listarsalas: any = [];

// idvalor: number = (this.route.params._value.id);

constructor(
  private service2: AppHttpService,
  private router: Router,
  private route: ActivatedRoute,
 ) {
 // json de exibicao de cursos
// this.idvalor = this.route.snapshot.params['id'];

  }
 ngOnInit() {

this.route.params.subscribe(
(params: any) => {
  this.idvalor = params['id'];
}
);

console.log(this.idvalor);

  this.service2.build('curso')
  .view(this.idvalor)
  .subscribe ((data) => {
 this.usuario = data.curso;
  }
  );

  this.service2.build('professor')
  .list()
  .subscribe ((data) => {
this.listarprofessores = data;
  }
  );

  this.service2.build('sala')
  .list()
  .subscribe ((data) => {
this.listarsalas = data;
  }
  );

 }
 update() {
console.log(this.usuario.professores);

const objetogravar: object = {

  nome: this.usuario.nome ,
  inicio: this.usuario.inicio ,
  fim: this.usuario.fim ,
  salas: this.usuario.salas ,
  professores:  this.usuario.salas
};

console.log(objetogravar);
// let getnomes = 'a';
  this.service2.build('curso')
    .update( this.idvalor , objetogravar  )
    .subscribe(
      () => {
    alert('sacuraba');
      }
    );
}
 // json de exibicao de cursos


}

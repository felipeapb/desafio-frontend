import { Router } from '@angular/router';
import { AppHttpService } from './../app-http.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {



public listaprof = {};
listasala = {};
public usuario = {
  nome: '',
  inicio: '',
  fim: '',
  salas: [ ],
  professores: [ ]
};
public professores = [];
public salas = [];
public cursos: any = [];
public listarprofessores: any = [];
public listarsalas: any = [];
public valortotal = '';
 constructor(
    private service2: AppHttpService,
    private router: Router,
 ) { }
ngOnInit() {
  this.service2.build('curso')
    .list()
    .subscribe ((data) => {
      this.cursos = data.cursos;
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
    $(document).ready(function() {
      $('.botao-criar').click(function() {
      $('.layer-sobreposto').delay(100).fadeIn(500);
      $('.box_inserir').delay(500).fadeIn(500);
    });
      $('.fechar_inserir').click(function() {
      $('.box_inserir').delay(100).fadeOut(500);
      $('.layer-sobreposto').delay(500).fadeOut(500);
    });
  });
}

  logout() {
      localStorage.clear();
      alert('Deslogado com sucesso');
      location.reload();
   }

save() {
  for (let i in this.salas) {
      this.usuario.salas.push({id: '', sala: this.salas[i]});
    }

  for (let i in this.professores) {
    this.usuario.professores.push({id: '', nome: this.professores[i]})
  }

console.log(this.usuario);
 this.service2.build('curso')
  .create( this.usuario )
  .subscribe(
    () => {
      $(document).ready(function() {
      alert('criado com sucesso');
        $('.box_inserir').delay(100).fadeOut(500);
          $('.layer-sobreposto').delay(500).fadeOut(500);
      });
      location.reload();
    }
  );
}
delete(id) {
    if (confirm('Você tem certeza')) {
      this.service2.build('curso')
      .delete(id)
      .subscribe(
        () => {
          $(document).ready(function() {
              location.reload();
          });

        }
      );
    }
}

}

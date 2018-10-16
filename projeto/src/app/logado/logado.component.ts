import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './../app-http.service';
import { Curso } from './../login/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';



import * as $ from 'jquery';
import { join } from 'path';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

public usuario = {};
public professores = {};
public salas = {};
public atum: object = this.professores;


public cursos: any = [];







  constructor(private service: CursosService, private service2: AppHttpService) { }

  ngOnInit() {

// json de gravacao



    this.service2.build('curso')
    .list()
    .subscribe ((data) => {
this.cursos = data.cursos;
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


   // this.service.list()
    // .subscribe(dados => this.cursos = dados.cursos );
    // .subscribe(console.log);
   // console.log(this.cursos);



  }


  save() {

console.log(this.professores);
console.log(this.salas);

this.service2.build('curso')
  .create( this.usuario )
  .subscribe(
    () => {
      $(document).ready(function() {
      alert('criado com sucesso');
        $('.box_inserir').delay(100).fadeOut(500);
          $('.layer-sobreposto').delay(500).fadeOut(500);
      });
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
          alert('Arquivo exluido com sucesso');
          });
        }
      );
    }
  }
}

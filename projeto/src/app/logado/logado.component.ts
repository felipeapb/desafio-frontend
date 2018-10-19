import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './../app-http.service';
import { Curso } from './../login/curso';
import { Component, OnInit } from '@angular/core';


import { join } from 'path';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
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
  ) {



 }



  ngOnInit() {

console.log(this.usuario)
// json de exibicao de cursos
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
  

// acoes com box de adesao




// acoes com box de adesao



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
    //sair do login
    localStorage.clear();
    alert('Deslogado com sucesso');
    location.reload();
   }

save() {
//organizar as salas para adicionar
  for (let i in this.salas) {
    this.usuario.salas.push({id: '', sala: this.salas[i]})
  }

 // organizar as salas para adicionar
 for (let i in this.professores) {
  this.usuario.professores.push({id: '', nome: this.professores[i]})
}

// salvar dados

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

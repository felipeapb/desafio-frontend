import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './../app-http.service';
import { Curso } from './../login/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';



import * as $ from 'jquery';
import { join } from 'path';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {


 segredo = '';




public usuario = {};

public professores = {};
public salas = {};
public uniao = [];
//public atum: object = this.professores;


public cursos: any = [];
public listarprofessores : any = [];
public listarsalas : any = [];





public valortotal= '';


 constructor(private service: CursosService, private service2: AppHttpService) {




  }

  ngOnInit() {


    setTimeout(() => {
       this.segredo =$('.box--item').length ;
       
       console.log(this.segredo);
      
    } , 1000 );
    
    this.uniao = [];

    

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
 
  setTimeout(() => {
     
    console.log(this.usuario);
  } , 1000 );
   // this.service.list()
    // .subscribe(dados => this.cursos = dados.cursos );
    // .subscribe(console.log);
   // console.log(this.cursos);



  }

//salvar dados
save() {

  setTimeout(() => {

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
},2000);
  }

 
// conso
//deletar dados
  delete(id) {

    if (confirm('Você tem certeza')) {
      this.service2.build('curso')
      .delete(id)
      .subscribe(
        () => {
          $(document).ready(function() {
          alert('Arquivo exluido com sucesso');
          $(document).ready(function() {
            alert('criado com sucesso');
              $(this).fadeOut(500);
            });
          
          });
        }
      );
    }
  }
  
}

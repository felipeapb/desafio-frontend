import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './../app-http.service';
import { Curso } from './../login/curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from '@angular/router';


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

  nome:'' ,
  inicio: '',
  fim: '',
  // salas:'' ,
  // professores: ''
};
tatu= [];

public professores = [];
public salas = [];
public cursos: any = [];
public listarprofessores: any = [];
public listarsalas: any = [];
public valortotal = '';
idvalor:number = (this.route.params._value.id);
 constructor(
  private service2: AppHttpService,
  private router: Router,
  private route: ActivatedRoute,
 ) {
 // json de exibicao de cursos
 console.log(this.usuario);

  }
 ngOnInit(){  

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
 update(){
    

  
 this.service2.build('curso')
    .update( this.idvalor , this.usuario  )
    .subscribe(
      () => {
    alert('sacuraba');
      }
    );
}
 // json de exibicao de cursos







 

 
    
 

 
    
    
    
 

}

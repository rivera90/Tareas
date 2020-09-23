import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

export interface Tarea{
  _id?: string;
  titulo?:string,
  subtitulo?:string;
  estado?:number;
  diaCreado?:string;
  diaModificacion?:string;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  tareas: Tarea[]=[];

  constructor(private tareasService: ServicioService) { }

  ngOnInit() {
    this.tareasService.getTareas()
    .subscribe(resp=>{
      
      this.tareas.push( ...resp.result)      
    })  
   
    this.tareasService.tareaNueva
    .subscribe(tarea=>{
      
      this.tareas.push(tarea.result);
    })

    this.tareasService.tareaTerminada
    .subscribe(tarea =>{
      
      let arrayNew : Tarea[]=[];
      this.tareas.forEach(function(elem,i){
        if(elem._id != tarea.result[0]._id){
          arrayNew.push(elem);
        }
        
      })
      this.tareas = arrayNew;
     
    })

    this.tareasService.tareaActualizada
    .subscribe(tarea =>{
      
      let arrayNew : Tarea[]=[];
      this.tareas.forEach(function(elem,i){
        if(elem._id == tarea.result[0]._id){
          arrayNew.push(tarea.result[0]);
        }else{
          arrayNew.push(elem);
        }
        
      })
      this.tareas = arrayNew;
     
    })
  }
  recargar(event){
    this.tareas = [];
    this.tareasService.getTareas()
    .subscribe(resp=>{
      
      this.tareas.push( ...resp.result)     
      
      if(event){
        event.target.complete();
      }
    })  
  }
  
 
}

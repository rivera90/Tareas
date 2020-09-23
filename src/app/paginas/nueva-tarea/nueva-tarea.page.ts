import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
})
export class NuevaTareaPage implements OnInit {

  Tarea ={
    titulo:'',
    subtitulo:''
  } 

  constructor(private tareasService: ServicioService,private router: Router) { }

  ngOnInit() {

  }

  onSubmit(formNuevo:NgForm){
    
    if(formNuevo.invalid) {return;} 

    this.tareasService.GuardarTarea(this.Tarea);
    
    this.Tarea ={
      titulo:'',
      subtitulo:''
    } 
    
    this.router.navigateByUrl('tareas');
    
  }
}

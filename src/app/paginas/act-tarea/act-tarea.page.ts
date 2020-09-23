import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RespuestaTareas, Tarea } from 'src/app/interfaces/interfaces';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-act-tarea',
  templateUrl: './act-tarea.page.html',
  styleUrls: ['./act-tarea.page.scss'],
})
export class ActTareaPage implements OnInit {

  constructor(private tareaServices: ServicioService,
    private rutaActiva: ActivatedRoute,
    private toastController: ToastController) { }
  Tarea ={
    titulo:'',
    subtitulo:'',
    estado:1
  } 
  tareaID: String='';
  tareaActualizada : RespuestaTareas;
  ngOnInit() {
    
    this.Tarea.titulo = this.rutaActiva.snapshot.params.titulo;
    this.Tarea.subtitulo = this.rutaActiva.snapshot.params.subtitulo;
    this.tareaID = this.rutaActiva.snapshot.params.id
  }
  async onSubmitact(){     

    this.tareaActualizada = await this.tareaServices.ActualizarTarea(this.tareaID,this.Tarea); 

     if(this.tareaActualizada.status){
      const toast = await this.toastController.create({
        message: this.tareaActualizada.message,
        duration: 2000
      });
      toast.present();
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Tarea } from 'src/app/interfaces/interfaces';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  @Input() tareas: Tarea[] =[]

  constructor(private tareasService: ServicioService,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
    
  }

  async Eliminar(tarea:Tarea){    
    const alert = await this.alertController.create({      
      header: 'Alerta!',
      message: '¿Estás seguro de <strong>eliminar</strong> el registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false;
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.tareasService.EliminarTarea(tarea._id);   
          }
        }
      ]
    });

    await alert.present(); 
     
 }

  async MarcarTerminado(tarea:Tarea){

    const TareaActualizada = {
      titulo:tarea.titulo,
      subtitulo:tarea.subtitulo,
      estado:2
    }
    
    const tareaTermiada = await this.tareasService.TerminarTarea(tarea._id,TareaActualizada);
    
    if(tareaTermiada){
      const toast = await this.toastController.create({
        message: 'La tarea fue terminada.',
        duration: 2000
      });
      toast.present();
    }
      
  }

  ActualizarTarea(tarea:Tarea){
    
    this.router.navigate([`/act-tarea/${tarea.titulo}/${tarea.subtitulo}/${tarea._id}`])
  }
}

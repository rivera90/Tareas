import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/interfaces/interfaces';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-tareas-completadas',
  templateUrl: './tareas-completadas.page.html',
  styleUrls: ['./tareas-completadas.page.scss'],
})
export class TareasCompletadasPage implements OnInit {

  constructor(private tareasService: ServicioService) { }

  tareas: Tarea[]=[];
  
  ngOnInit() {
    this.tareasService.ObtenerTareasCompletadas()
    .subscribe(resp=>{      
      
      if(resp.result.length >0){
        this.tareas.push( ...resp.result)
      }
      
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

  }

  async Eliminar(tarea:Tarea){
    
    const tareaeliminada = await this.tareasService.EliminarTarea(tarea._id);    
  }
}

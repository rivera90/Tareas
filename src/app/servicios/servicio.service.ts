import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTareas, Tarea } from '../interfaces/interfaces';
import { TareasCompletadasPageRoutingModule } from '../paginas/tareas-completadas/tareas-completadas-routing.module';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  tareaNueva = new EventEmitter<RespuestaTareas>();
  tareaTerminada = new EventEmitter<RespuestaTareas>();
  tareaActualizada = new EventEmitter<RespuestaTareas>();
  
  constructor(private http:HttpClient) { }

  getTareas(){
    
    return this.http.get<RespuestaTareas>(`${ URL }/api/tareas`);
  }

  ObtenerTareasCompletadas(){
    return this.http.get<RespuestaTareas>(`${ URL }/api/tareasCerradas`);
  }

  GuardarTarea(tarea:Tarea){
    
    return new Promise(resolve=>{
      
      this.http.post<RespuestaTareas>(`${URL}/api/tarea`,tarea)
      .subscribe(resp=>{        
       
        this.tareaNueva.emit(resp);
        resolve(true);
      })
      
    });
    
  }

  EliminarTarea(tareaid:String){

    return new Promise(resolve=>{
      this.http.delete<RespuestaTareas>(`${ URL }/api/tarea/${tareaid}`)
      .subscribe(resp=>{
        
        this.tareaTerminada.emit(resp);
        resolve(resp);
      });
    })
    // return this.http.delete<RespuestaTareas>(`${ URL }/api/tarea/${tareaid}`);
  }

  TerminarTarea(id:String,tarea:Tarea){
    
    return new Promise(resolve =>{
      this.http.put<RespuestaTareas>(`${ URL }/api/tarea/${id}`,tarea)
      .subscribe(resp=>{
        this.tareaTerminada.emit(resp);
        resolve(true);
      });
      
    })
    // return this.http.put<RespuestaTareas>(`${ URL }/api/tarea/${id}`,tarea);
  }

  ActualizarTarea<RespuestaTareas>(id:String,tarea:Tarea){
    
    return new Promise(resolve =>{
      this.http.put<RespuestaTareas>(`${ URL }/api/tarea/${id}`,tarea)
      .subscribe(resp=>{
        this.tareaActualizada.emit(resp);
        resolve(resp);
      });
      
    })
    // return this.http.put<RespuestaTareas>(`${ URL }/api/tarea/${id}`,tarea);
  }
}

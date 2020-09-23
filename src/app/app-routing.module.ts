import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./paginas/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'tareas-completadas',
    loadChildren: () => import('./paginas/tareas-completadas/tareas-completadas.module').then( m => m.TareasCompletadasPageModule)
  },
  {
    path: 'nueva-tarea',
    loadChildren: () => import('./paginas/nueva-tarea/nueva-tarea.module').then( m => m.NuevaTareaPageModule)
  },
  {
    path: 'act-tarea/:titulo/:subtitulo/:id',
    loadChildren: () => import('./paginas/act-tarea/act-tarea.module').then( m => m.ActTareaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

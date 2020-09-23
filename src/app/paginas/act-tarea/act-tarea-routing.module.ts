import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActTareaPage } from './act-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: ActTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActTareaPageRoutingModule {}

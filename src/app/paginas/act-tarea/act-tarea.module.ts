import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActTareaPageRoutingModule } from './act-tarea-routing.module';

import { ActTareaPage } from './act-tarea.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActTareaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ActTareaPage]
})
export class ActTareaPageModule {}

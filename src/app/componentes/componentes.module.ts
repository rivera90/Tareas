import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ListadoComponent
  ],
  exports:[
    HeaderComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }

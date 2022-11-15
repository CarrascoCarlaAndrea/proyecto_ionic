import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarDetallesPageRoutingModule } from './lugar-detalles-routing.module';

import { LugarDetallesPage } from './lugar-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarDetallesPageRoutingModule
  ],
  declarations: [LugarDetallesPage]
})
export class LugarDetallesPageModule {}

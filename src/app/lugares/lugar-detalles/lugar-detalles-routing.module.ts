import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarDetallesPage } from './lugar-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: LugarDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarDetallesPageRoutingModule {}

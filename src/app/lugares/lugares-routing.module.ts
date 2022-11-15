import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresPage
  },
  {
    path: 'lugar-detalles',
    loadChildren: () => import('./lugar-detalles/lugar-detalles.module').then( m => m.LugarDetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallleryPage } from './galllery.page';

const routes: Routes = [
  {
    path: '',
    component: GallleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallleryPageRoutingModule {}

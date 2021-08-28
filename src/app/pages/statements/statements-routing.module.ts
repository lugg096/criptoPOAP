import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementsPage } from './statements.page';

const routes: Routes = [
  {
    path: '',
    component: StatementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatementsPageRoutingModule {}

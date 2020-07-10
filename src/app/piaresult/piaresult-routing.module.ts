import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaresultPage } from './piaresult.page';

const routes: Routes = [
  {
    path: '',
    component: PiaresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiaresultPageRoutingModule {}

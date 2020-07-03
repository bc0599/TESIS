import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaPreResultPage } from './piapreresult.page';

const routes: Routes = [
  {
    path: '',
    component: PiaPreResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiaPreResultPageRoutingModule {}

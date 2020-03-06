import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaPreResultPage } from './pia-pre-result.page';

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

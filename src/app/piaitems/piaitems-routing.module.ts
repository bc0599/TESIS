import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaItemsPage } from './piaitems.page';

const routes: Routes = [
  {
    path: '',
    component: PiaItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiaItemsPageRoutingModule {}
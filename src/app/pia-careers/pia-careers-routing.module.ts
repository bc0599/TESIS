import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaCareersPage } from './pia-careers.page';

const routes: Routes = [
  {
    path: '',
    component: PiaCareersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiaCareersPageRoutingModule {}

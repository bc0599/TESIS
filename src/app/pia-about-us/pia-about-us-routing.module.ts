import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiaAboutUsPage } from './pia-about-us.page';

const routes: Routes = [
  {
    path: '',
    component: PiaAboutUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiaAboutUsPageRoutingModule {}

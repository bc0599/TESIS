import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'piaitems',
    loadChildren: () => import('./piaitems/piaitems.module').then( m => m.PiaItemsPageModule)
  },
  {
    path: 'pia-about-us',
    loadChildren: () => import('./pia-about-us/pia-about-us.module').then( m => m.PiaAboutUsPageModule)
  },
  {
    path: 'pia-careers',
    loadChildren: () => import('./pia-careers/pia-careers.module').then( m => m.PiaCareersPageModule)
  },
  {
    path: 'piapreresult',
    loadChildren: () => import('./piapreresult/piapreresult.module').then( m => m.PiaPreResultPageModule)
  },
  {
    path: 'piaresult',
    loadChildren: () => import('./piaresult/piaresult.module').then( m => m.PiaresultPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

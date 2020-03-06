import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'pia-items',
    loadChildren: () => import('./pia-items/pia-items.module').then( m => m.PiaItemsPageModule)
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
    path: 'pia-pre-result',
    loadChildren: () => import('./pia-pre-result/pia-pre-result.module').then( m => m.PiaPreResultPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaAboutUsPageRoutingModule } from './pia-about-us-routing.module';

import { PiaAboutUsPage } from './pia-about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiaAboutUsPageRoutingModule
  ],
  declarations: [PiaAboutUsPage]
})
export class PiaAboutUsPageModule {}

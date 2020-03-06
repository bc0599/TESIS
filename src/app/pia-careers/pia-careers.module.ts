import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaCareersPageRoutingModule } from './pia-careers-routing.module';

import { PiaCareersPage } from './pia-careers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiaCareersPageRoutingModule
  ],
  declarations: [PiaCareersPage]
})
export class PiaCareersPageModule {}

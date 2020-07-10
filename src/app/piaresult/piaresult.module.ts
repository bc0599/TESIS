import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaresultPageRoutingModule } from './piaresult-routing.module';

import { PiaresultPage } from './piaresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiaresultPageRoutingModule
  ],
  declarations: [PiaresultPage]
})
export class PiaresultPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaPreResultPageRoutingModule } from './piapreresult-routing.module';

import { PiaPreResultPage } from './piapreresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiaPreResultPageRoutingModule
  ],
  declarations: [PiaPreResultPage]
})
export class PiaPreResultPageModule {}

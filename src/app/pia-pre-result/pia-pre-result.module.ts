import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaPreResultPageRoutingModule } from './pia-pre-result-routing.module';

import { PiaPreResultPage } from './pia-pre-result.page';

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

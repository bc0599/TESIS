import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiaItemsPageRoutingModule } from './pia-items-routing.module';

import { PiaItemsPage } from './pia-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiaItemsPageRoutingModule
  ],
  declarations: [PiaItemsPage]
})
export class PiaItemsPageModule {}

import { NgModule, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonSlides} from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { PiaItemsPageRoutingModule } from './piaitems-routing.module';

import { PiaItemsPage } from './piaitems.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PiaItemsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PiaItemsPage]
})
export class PiaItemsPageModule {}
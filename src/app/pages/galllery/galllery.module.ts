import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallleryPageRoutingModule } from './galllery-routing.module';

import { GallleryPage } from './galllery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallleryPageRoutingModule
  ],
  declarations: [GallleryPage]
})
export class GallleryPageModule {}

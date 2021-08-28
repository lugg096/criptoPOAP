import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockingPageRoutingModule } from './blocking-routing.module';

import { BlockingPage } from './blocking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockingPageRoutingModule
  ],
  declarations: [BlockingPage]
})
export class BlockingPageModule {}

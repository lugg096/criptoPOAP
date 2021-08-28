import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatementsPageRoutingModule } from './statements-routing.module';

import { StatementsPage } from './statements.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatementsPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [StatementsPage]
})
export class StatementsPageModule {}

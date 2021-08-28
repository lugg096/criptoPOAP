import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StatementFormPageRoutingModule } from './statement-form-routing.module';

import { StatementFormPage } from './statement-form.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StatementFormPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [StatementFormPage]
})
export class StatementFormPageModule {}

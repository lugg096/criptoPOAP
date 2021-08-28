import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PinComponent } from './pin/pin.component';
import { QrTestigosComponent } from './qr-testigos/qr-testigos.component';
import { AlertComponent } from './alert/alert.component';
import { MenuComponent } from './menu/menu.component';
/* LOTTIE */
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { PinAccessComponent } from './pin-access/pin-access.component';
import { DetailComponent } from './detail/detail.component';
import { PipesModule } from '../pipes/pipes.module';
import { AlertInputComponent } from './alert-input/alert-input.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    PinComponent,
    QrTestigosComponent,
    AlertComponent,
    MenuComponent,
    PinAccessComponent,
    DetailComponent
  ],
  exports:[
    PinComponent,
    QrTestigosComponent,
    AlertComponent,
    MenuComponent,
  ],
  imports: [
    PipesModule,
    CommonModule,
    IonicModule,
    LottieModule.forRoot({ player: playerFactory })/* LOTTIE */
  ]
})
export class ComponentsModule { }

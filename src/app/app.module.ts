import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { GenerarCodeQRComponent } from './components/generar-code-qr/generar-code-qr.component';;
import { MediaCapture } from '@ionic-native/media-capture/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';

/* LOTTIE */
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ViewKeyComponent } from './components/view-key/view-key.component';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { FiltroCountryPipe } from './pipes/filtro-country.pipe';
import { AlertInputComponent } from './components/alert-input/alert-input.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { StatementsPage } from './pages/statements/statements.page';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent,GenerarCodeQRComponent,ViewKeyComponent,AlertInputComponent,  
    ControlMessagesComponent],
  entryComponents: [GenerarCodeQRComponent,ViewKeyComponent,AlertInputComponent,
    ControlMessagesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    PipesModule,
    LottieModule.forRoot({ player: playerFactory })/* LOTTIE */
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    SocialSharing,
    Clipboard,
    MediaCapture,
    ImagePicker,
    StatementsPage
/*     FileOpener,
    
    Base64, */
/*     File */
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { IonicComponentsService } from '../services/ionic-components.service';
import { AlertComponent } from '../components/alert/alert.component';
import { ModalController } from '@ionic/angular';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Funciones {

  constructor(
    private _modal: ModalController,
    public _comp: IonicComponentsService) { }

  /* ALERT */
  async alert(type, buttonConfim, textTitle, subtitle, desablet?) {

    if (!this.isVarInvalid(desablet)) return true;
    let options = {
      path: '/assets/json/' + type + '.json',
      loop: true,
      autoplay: true
    }
    return new Promise(async resolve => {
      const modal = await this._modal.create({
        component: AlertComponent,
        cssClass: 'style-alert',
        componentProps: {
          type,
          textTitle,
          subtitle,
          buttonConfim,
          options
        }
      });

      modal.onDidDismiss().then(async (res: any) => {
        resolve(res.data);
      });
      return await modal.present();
    });
  }

  timeStamp() {
    return new Date().getTime();
  }

  isVarInvalid(data: any) {
    if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '') return true;
    return false;
  }

  async alertError(error: any) {
    console.log('error', error);

    let mensj = error;
    if (!this.isVarInvalid(error.message)) mensj = error.message;
    await this.alert(env.MSG.TYPE_ERROR, 'ok', env.MSG.ERROR_TITLE, mensj);
  }

}

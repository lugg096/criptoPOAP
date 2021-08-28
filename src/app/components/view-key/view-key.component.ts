import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';
import domtoimage from "dom-to-image";
import { PinAccessComponent } from '../pin-access/pin-access.component';
import { Funciones } from 'src/app/compartido/funciones';

var imagenB64;


@Component({
  selector: 'app-view-key',
  templateUrl: './view-key.component.html',
  styleUrls: ['./view-key.component.scss'],
})
export class ViewKeyComponent implements OnInit {

  /*   @ViewChild("container") container; */
  @ViewChild("container", { read: ElementRef, static: true }) container: ElementRef;


  constructor(
    private _fun: Funciones,
    private _modal: ModalController,
    public _storage: StorageService,
    private socialSharing: SocialSharing,
    private clipboard: Clipboard,
    public _comp: IonicComponentsService) {
  }

  codeQR: any = '';
  texto: any = '';
  title: any = '';

  data: any;

  namekey = '';
  keySelec = 'pubK';

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.data = await this._storage.getLocalStorage('DATA');
    console.log('DATA', this.data);
    this.codeQR = this.data.ADDRESS;
    this.namekey = 'Address';
    this.keySelec = 'pubK';

  }

  changekey(key, namekey,keySelec) {
    this.codeQR = key;
    this.namekey = namekey;
    this.keySelec = keySelec;
  }

  ngAfterViewInit() {
    domtoimage
      .toPng(this.container.nativeElement)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        imagenB64 = img.src;
        console.log('momstrar IMG', img.src)
        console.log('momstrar IMG', img)
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      })
  }

  closeModal() {
    this._modal.dismiss({ dataPersonal: null });
  }

  Continue() {
    this._modal.dismiss({
      dataPersonal: {}
    });
  }

  async privateKey() {
    const modal = await this._modal.create({
      component: PinAccessComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then(async (res: any) => {
      console.log('respuestaaa', res.data);
      if (this._fun.isVarInvalid(res.data)) return;
      if (!this._fun.isVarInvalid(res.data.privateKey)) this.changekey(res.data.privateKey, 'Private key','priK');
    });
    return await modal.present();

  }


  copyText() {
    this.clipboard.copy(this.codeQR);
    this._comp.presentToast('Copied', 'primary', 100);
  }

  async compartirDireccion() {


    this.socialSharing.share(
      '',
      '',
      imagenB64,
      this.texto + ': ' + this.codeQR
    );
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonSlides, LoadingController, ModalController } from '@ionic/angular';
import { OnboardingService } from 'src/app/services/onboarding.service';
import { StorageService } from 'src/app/services/storage.service';
import { sha256, sha224 } from 'js-sha256';
import * as sha1 from 'js-sha1';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Web3jsService } from 'src/app/services/web3js.service';


@Component({
  selector: 'app-import-wallet',
  templateUrl: './import-wallet.page.html',
  styleUrls: ['./import-wallet.page.scss'],
})
export class ImportWalletPage implements OnInit {

  @ViewChild('slidesPadre', { static: false }) private slidesPadre: IonSlides;

  constructor(
    private web3: Web3jsService,
    public _storage: StorageService,
    public router: Router,
    private barcodeScanner: BarcodeScanner,
    public loadingController: LoadingController,
    public _onboarding: OnboardingService,
    public _comp: IonicComponentsService,
    private imagePicker: ImagePicker) { }

  slideOptsOnboarding = {
    allowSlideNext: false,
    allowSlidePrev: false,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400
  };

  alias = "Nueva wallet";

  ngOnInit() {

  }

  verificarFrase() {
    let hashData = sha256(this.frase);
    this.getAccount('0x' + hashData);
  }

  verificarPhoto() {
    let hashData = sha256(this.foto);
    this.getAccount('0x' + hashData);
  }


  section = 'frase';
  frase = '';
  llavePublica = '';
  foto = '';

  segmentChanged(event) {
    this.section = event.detail.value;
  }

  async scan(type) {
    this.barcodeScanner.scan({ prompt: "Lee la llave publica" }).then(async data => {
      if (type == 'pk') this.llavePublica = data.text;
      if (type == 'frase') this.frase = data.text;
    }).catch(err => {
      console.log('Error', err);
    })
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  async ionViewDidEnter() {
    this._storage.resetData();
    this.frase = '';
    this.llavePublica = '';
    this.pin = '';
    this.backSlidePadre();
    this.backSlidePadre();
  }


  async iniciar() {
    this._storage.datos.NAME = this.alias;
    try {
      console.log('GUARDAR', this._storage.datos);
      await this._storage.setLocalStorage('DATA', this._storage.datos);
      await this._storage.setLocalStorage('FIRMAS', []);
    } catch (e) {
      alert('Ocurrió un problema de compatibilidad con navegador: ' + e);
    }
    this.router.navigate(['/statements']);
  }


  async getAccount(hashData) {

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      backdropDismiss: false,
      showBackdrop: true,
      spinner: "bubbles"
    });
    await loading.present();

    await this.web3.account(hashData).then(async (res: any) => {
      console.log('res', res);

      if (!res) {
        alert('Error en servidor');
        return;
      }

      loading.dismiss();
      this.nextSlidePadre();
      this._storage.datos.ADDRESS = res.address;
      this._storage.datos.DID = sha1(sha256(res.address));
      this._storage.datos.privateKey = res.privateKey;

    }, err => {
      loading.dismiss();
      this._comp.presentToast('Error parametros enviados', 'danger', 2000);
    })
  }


  gallery() {

    const options = {
      outputType: 1,
      maximumImagesCount: 1
    };

    this.imagePicker.getPictures(options).then((results) => {
      this.foto = 'data:image/jpeg;base64,' + results[0];
    }, (err) => {
      console.log('MOSTRAR', err);
    });
  }

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      console.log('fileInput.target.files[0]', fileInput.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        let hashPhoto = sha256(this.cardImageBase64);
        this.nextSlidePadre();
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  nextSlidePadre() {
    this.slidesPadre.lockSwipeToNext(false);
    this.slidesPadre.slideNext();
    this.slidesPadre.lockSwipeToNext(true);
  }

  backSlidePadre() {
    this.slidesPadre.lockSwipeToPrev(false);
    this.slidesPadre.slidePrev();
    this.slidesPadre.lockSwipeToPrev(true);
  }


  /* Codigo pin */
  public dataSlideImportPhoto = {
    titulo: "Import",
    subTitulo: "Enter PIN",
    texto: "6 digit PIN with which I create the account"
  }


  public dataSlideCreate = {
    titulo: "Step 1",
    subTitulo: "Register PIN",
    texto: "New 6 digit PIN"
  }

  public dataSlideValidacion = {
    titulo: "Step 2",
    subTitulo: "Confirm your PIN",
    texto: "Re-enter 6 digit PIN"
  }
  pin: string = "";

  getClave($event) {
    this.pin = $event;
    this.nextSlidePadre();
  }

  async getClaveValidPhoto($event) {
    this.pin = $event;
    let hashPk = sha256(sha256(this.cardImageBase64) + sha256(this.pin));

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      backdropDismiss: false,
      showBackdrop: true,
      spinner: "bubbles"
    });
    await loading.present();

    await this.web3.account('0x' + hashPk).then(async (res: any) => {

      loading.dismiss();
      this.nextSlidePadre();
      this._storage.datos.ADDRESS = res.address;
      this._storage.datos.DID = sha1(sha256(res.address));
      this._storage.datos.privateKey = res.privateKey;
      this.getClaveValid($event);

    }, err => {
      this._comp.presentToast('Error parameters sent', 'danger', 2000);
      loading.dismiss();
    })


  }

  async getClaveValid($event) {
    if (this.pin == $event || this.section == 'foto') {
      this._storage.datos.PIN = sha256(sha256(this.pin.toString()));

      let position = Number(this.pin.substr(0, 2));
      if (position > 62) position = position - 62;
      if (position == 0) position = 2;
      let n1 = Number(this.pin.substr(2, 2));
      let n2 = Number(this.pin.substr(4, 2))

      let str = this._storage.datos.privateKey.substr(position, 4);

      let hex1 = str.substr(0, 2);
      let number1 = parseInt(hex1, 16) + n1;

      let hex2 = str.substr(2, 2);
      let number2 = parseInt(hex2, 16) + n2;

      this._storage.datos.privateKey = this._storage.datos.privateKey.substr(0, position) +
        this._storage.datos.privateKey.substr(position + 4, this._storage.datos.privateKey.length) +
        number1 + 'G' + number2;

      this.iniciar();

    } else this._comp.presentToast('The PIN is not correct', 'danger', 1000);

  }


}

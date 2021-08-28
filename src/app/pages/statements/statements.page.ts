import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { sha256 } from 'js-sha256';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';
import { StorageService } from 'src/app/services/storage.service';
import { DetailComponent } from 'src/app/components/detail/detail.component';
import { Funciones } from 'src/app/compartido/funciones';
import { FiltroCountryPipe } from 'src/app/pipes/filtro-country.pipe';
import { Web3jsService } from 'src/app/services/web3js.service';

const MEDIA_FOLDER_NAME = 'my_media';
var window: Window;
@Component({
  selector: 'app-statements',
  templateUrl: './statements.page.html',
  styleUrls: ['./statements.page.scss'],
})
export class StatementsPage implements OnInit {

  @ViewChild("content1", { read: ElementRef, static: true }) content1: ElementRef;
  @ViewChild("contenido1", { read: ElementRef, static: true }) contenido1: ElementRef;

  constructor(
    private web3: Web3jsService,
    private _fun: Funciones,
    private _modal: ModalController,
    private renderer: Renderer2,
    public _storage: StorageService,
    public _comp: IonicComponentsService,
    private barcodeScanner: BarcodeScanner,
    public router: Router,
    private plt: Platform,) { }

  listFirmas = [];

  segSelect = 'cred';
  loading: any;
  emty_cred = true;
  address = '';

  segmentChanged(event) {
    console.log('event', event.detail.value);
    this.segSelect = event.detail.value;
  }

  goCert() {
    this.router.navigate(['app/cred']);
  }



  async getDataWallet() {
    /*  if(this.address==''){
      let data = await this._storage.getLocalStorage('DATA');
      this.address = data.ADDRESS;
     } */
    let data = await this._storage.getLocalStorage('DATA');
    this.address = data.ADDRESS;
    console.log();

    let dataWallet: any = await this.web3.getDataWallet(this.address);
    console.log('dataWallet', dataWallet.data);

    /*     this.listFirmas = dataWallet.data; */
    this.list_main = dataWallet.data;
    this.list = dataWallet.data;
  }

  list_main = [];
  list = [];


  load = false;
  async refresh(event?) {
    this.loading = await this._comp.presentLoading();
    let dataWallet: any = await this.web3.getDataWallet(this.address);
    console.log('dataWallet', dataWallet.data);
    /*     this.listFirmas = dataWallet.data; */
    this.list_main = dataWallet.data;
    this.list = dataWallet.data;
    this.loading.dismiss();
    if (event) event.target.complete();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  pruebaNext(event) {
    console.log('CALL', event);
    console.log('this.listFirmas', this.listFirmas);
    console.log('address', this.address);

    this.address = '';
    this.list = [];

  }

  optionFilter = [
    { key: 'name', value: '', type: 'string' },
    { key: 'status', value: false, type: 'boolean' }
  ];

  nameFilter = '';
  changeInput(value, index, type) {
    console.log('value', value);

    if (type == 'checkbox') {
      value = value.detail.checked;
    }

    this.optionFilter[index].value = value;
    this.filter();
  }

  filter() {
    this.list = this.list_main.filter(a => {

      let filter1 = true;
      let filter2 = true;

      for (let index = 0; index < this.optionFilter.length; index++) {
        var itemf: any = this.optionFilter[index];

        if (itemf.type == 'string') {
          filter1 = a[itemf.key].toLowerCase().indexOf(itemf.value.toLowerCase()) != -1;
        }

        if (itemf.type == 'boolean') {
          if (a[itemf.key]) filter2 = true;
          else filter2 = itemf.value;
        }
      }
      return filter1 && filter2;
    });
    /*     this.orderList(); */
  }


  cleanData(event) {
    console.log('CALL', event);
    this.address = '';
    this.list = [];
    this.closeMenu();
  }
  
  ngOnInit() {
    this.getDataWallet();
  }

  ionViewDidEnter() {
    if (this.address == '' || this._storage.appIniciar) this.getDataWallet();
    else this.refresh();

  }

  async getData(load, event?) {
    if (load) this.loading = await this._comp.presentLoading();

    this.getDataWallet();
    if (event) event.target.complete();
    if (load) this.loading.dismiss();
  }


  async scan() {

    /*     let codeScane = '{n:"100",a:"9f73f937",c:"0x1Dc825F0772ab99E083b6dcff2d4d294deeD2509",m:"claimPOAP",p1:"<addr>:64",p2:"QmfZiYUwJuaX5NfCqdg9jXprkq7fXhUoccYWqdJitMmt9Y:256"}';
    
        
        
        codeScane = codeScane.replace('{', '');
        codeScane = codeScane.replace('}', '');
        console.log('codeScane...1', codeScane);
    
        this.router.navigate(['/form/' + codeScane]);
    
        return; */
    this.barcodeScanner.scan({ prompt: "Lee código QR" }).then(async code => {
      console.log('code', code);

      if (code) {
        let codeScane = code.text;
        codeScane = codeScane.replace('{', '');
        codeScane = codeScane.replace('}', '');
        console.log('codeScane...1', codeScane);
        this.router.navigate(['/form/' + codeScane]);
      }

    }).catch(err => {
      this._comp.presentToast('Error en lector QR', 'danger', 3000);
      console.log('Error', err);
    })
  }

  openMenu() {
    console.log('ABRIR');

    this.renderer.addClass(this.contenido1.nativeElement, 'contenido1Open');
  }

  closeMenu() {
    this.renderer.removeClass(this.contenido1.nativeElement, 'contenido1Open');
  }

  async detail(data) {
    const modal = await this._modal.create({
      component: DetailComponent,
      componentProps: {
        data
      }
    });

    modal.onDidDismiss().then(async (res: any) => {
      console.log('respuestaaa', res.data);
   /*    this.refresh(); */
      if (this._fun.isVarInvalid(res.data)) return;
      if (!this._fun.isVarInvalid(res.data.update)) {
        this.refresh();
      }
    });
    return await modal.present();

  }


}

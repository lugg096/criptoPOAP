import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController } from '@ionic/angular';
import { setFlagsFromString } from 'node:v8';
import { Funciones } from 'src/app/compartido/funciones';
import { Web3jsService } from 'src/app/services/web3js.service';
import domtoimage from "dom-to-image";
import { AlertInputComponent } from '../alert-input/alert-input.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';
import { environment as env } from 'src/environments/environment';
import { sha256 } from 'js-sha256';
import { PinAccessComponent } from '../pin-access/pin-access.component';
import { StorageService } from 'src/app/services/storage.service';

var imagenB64;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {


  @ViewChild("container", { read: ElementRef, static: true }) container: ElementRef;

  constructor(
    public _storage: StorageService,
    public _comp: IonicComponentsService,
    private socialSharing: SocialSharing,
    private _fun: Funciones,
    private web3: Web3jsService,
    private _modal: ModalController,
  ) { }

  dataUser: any;
  data: any;
  urlTx = '';
  urlContract = '';
  urltoken = '';
  urlAddress = '';

  metadata: any = {
    creator: '',
    url: '',
    alia: ''
  };




  ngOnInit() {
    this.isTranfer = false;
    this.isBurn=false;
    console.log('DATA....1', this.data);
    this.urlTx = this.isNet(this.data.chainid) + 'tx/' + this.data.tx;
    this.urlContract = this.isNet(this.data.chainid) + 'address/' + this.data.contract;
    this.urltoken = this.isNet(this.data.chainid) + 'token/' + this.data.contract;

    console.log('this.urlTx', this.urlTx);
    console.log('this.urlContract', this.urlContract);
    console.log('this.urltoken', this.urltoken);
    this.getUser();
    this.getData();
  }

  async getUser() {
    this.dataUser = await this._storage.getLocalStorage('DATA');

    console.log('ADDRESS', this.dataUser.ADDRESS);

  }

  addrxDest: any;
  dataAPI: any;

  async send() {
    const modal = await this._modal.create({
      component: AlertInputComponent,
      cssClass: 'style-alert-input',
      componentProps: {
        buttonConfim: 'Send',
        textTitle: 'Alert',
        subtitle: `Enter destination address`,
        field: {
          value: '',
          caption: `Address to`,
          placeholder: 'Enter address',
          type: 'text'
        }
      }
    });

    modal.onDidDismiss().then(async (res: any) => {
      console.log(res.data);
      if (this._fun.isVarInvalid(res.data)) return;
      if (!this._fun.isVarInvalid(res.data.confirm)) {
        console.log('res.data.confirm', res.data.value);
        /* *********************** */

        this.addrxDest = res.data.value;
        const loading: any = await this._comp.presentLoading();
        try {
          let resData: any = await this.web3.sendTxAPI(this.data.contract, 'claimPOAP', this.data.chainid, [this.addrxDest, this.data.ipfsmetadata]).toPromise();
          if (this._fun.isVarInvalid(resData.data)) {
            loading.dismiss();
            this._fun.alertError('error data invalid');
            return;
          }
          resData.data.gas = '0x1166AE';
          this.dataAPI = resData;
          console.log('dataAPI............1', this.dataAPI);
          this.getPk();
          loading.dismiss();
        } catch (error) {
          loading.dismiss();
          await this._fun.alertError(error);
        }
      }
    });
    return await modal.present();


  }

  async burn() {
    this.isBurn=true;
    let a = await this._fun.alert(env.MSG.TYPE_ALERT, 'Yes get', 'Are you sure?', 'If you burn the remaining tokens, no one will be able to receive them. Do you want to burn them?');
    if (this._fun.isVarInvalid(a)) return;
    const loading: any = await this._comp.presentLoading();
    try {
      let resData: any = await this.web3.sendTxAPI(this.data.contract, 'burnPOAP', this.data.chainid, [this.data.ipfsmetadata]).toPromise();
      if (this._fun.isVarInvalid(resData.data)) {
        loading.dismiss();
        this._fun.alertError('error data invalid');
        return;
      }
      resData.data.gas = '0x1166AE';
      this.dataAPI = resData;
      console.log('dataAPI............1', this.dataAPI);
      this.getPk();
      loading.dismiss();
    } catch (error) {
      loading.dismiss();
      await this._fun.alertError(error);
    }
  }


  async transfer() {
    this.isTranfer = true;
    const modal = await this._modal.create({
      component: AlertInputComponent,
      cssClass: 'style-alert-input',
      componentProps: {
        buttonConfim: 'Send',
        textTitle: 'Alert',
        subtitle: `Enter destination address`,
        field: {
          value: '',
          caption: `Address to`,
          placeholder: 'Enter address',
          type: 'text'
        }
      }
    });

    modal.onDidDismiss().then(async (res: any) => {
      console.log(res.data);
      if (this._fun.isVarInvalid(res.data)) return;
      if (!this._fun.isVarInvalid(res.data.confirm)) {
        console.log('res.data.confirm', res.data.value);

        this.addrxDest = res.data.value;
        const loading: any = await this._comp.presentLoading();
        try {
          let resData: any = await this.web3.sendTxAPI(this.data.contract, 'transferToken', this.data.chainid, [this.dataUser.ADDRESS, this.addrxDest, this.data.ipfsmetadata]).toPromise();
          if (this._fun.isVarInvalid(resData.data)) {
            loading.dismiss();
            this._fun.alertError('error data invalid');
            return;
          }
          /*   console.log('resData',resData);
            return */
          resData.data.gas = '0x1166AE';
          this.dataAPI = resData;
          console.log('dataAPI............1', this.dataAPI);
          this.getPk();
          loading.dismiss();
        } catch (error) {
          loading.dismiss();
          await this._fun.alertError(error);
        }
      }
    });
    return await modal.present();
  }

  rawTransaction: any;
  async singTx(privateKey) {

    const loading: any = await this._comp.presentLoading();
    console.log('privateKey......3', privateKey);

    this.rawTransaction = await this.web3.singTx(this.data.network, this.dataAPI.data, privateKey);
    console.log('this.rawTransaction', this.rawTransaction);

    loading.dismiss();
    if (this._fun.isVarInvalid(this.rawTransaction)) {
      return;
    }

    this.sendTx();
  }
  isTranfer = false;
  isBurn= false;
  async sendTx() {
    const loading: any = await this._comp.presentLoading();
    try {
      console.log('SENTX******************');

      let dataFin: any = await this.web3.sendTx(this.rawTransaction);
      console.log('dataFin', dataFin);

      if (this._fun.isVarInvalid(dataFin)) {
        loading.dismiss();
        return;
      }

      //POS - CLAIMPOAR
      /*      if (this.metaNFT.method == 'claimPOAP') { */
      let addrx = null;
      let isBurn = null;
      if (this.isTranfer) addrx = this.dataUser.ADDRESS;
      if (this.isBurn){
        isBurn = true;
        this.addrxDest =this.dataUser.ADDRESS;
      } 

      let resclaim = await this.web3.posClaimPOAP(this.data.contract, this.data.network, this.data.chainid, [this.addrxDest, this.data.ipfsmetadata], dataFin.transactionHash,addrx,this.isBurn)
      console.log('resclaim', resclaim);
      if (this._fun.isVarInvalid(resclaim)) {
        loading.dismiss();
        return;
      }
      /*   } */

      //SAVE IN APP POAP
      /*  console.log('MOSTRAR', this.dataNFT); */
      loading.dismiss();
      this.closeModal();
      await this._fun.alert(env.MSG.TYPE_SUC, ' Ok ', env.MSG.SUC_TITLE, env.MSG.SUC_SIGN);
      await this._modal.dismiss({ update: true });
      this.closeModal();
    } catch (error) {
      loading.dismiss();
      this.closeModal();
      await this._fun.alertError(error);
      await this._modal.dismiss({ update: false });
      this.closeModal();
    }
  }

  async compartir() {

    console.log('ESTO SE COMPARTE', imagenB64);

  /*   this.socialSharing.share(
      'IPFS (Art): ' + 'https://ipfs.io/ipfs/' + this.data.ipfsicon + '  IPFS (Metadata): ' + 'https://ipfs.io/ipfs/' + this.data.ipfsmetadata,
      '',
      '',
      'Blockchain (TX): ' + this.urlTx,
    ); */
    this.socialSharing.share(
      'Captura este POAP ' + this.data.name,
      '',
      '',
      'https://criptopoap.com/token/?'+this.data.ipfsmetadata+'&'+this.data.chainid
    );
  }

  segSelect = 'aut';

  segmentChanged(event) {
    console.log('event', event.detail.value);
    this.segSelect = event.detail.value;
  }


  getData() {
    this.web3.getDataToken(this.data.ipfsmetadata).subscribe((res: any) => {
      console.log('MOSTRAAAAAAAAAAR', res);
      /*    res.creator = '0x42ED2133F63160fB40300cE99e9e3D62710dbd9e';
         res.url = 'https://www.facebook.com/232221';
         res.alias = 'Luiggi Vargas'; */

      this.urlAddress = this.isNet(this.data.chainid) + 'address/' + res.creator;
      res.image = res.image.replace('ipfs://', '');


      this.metadata = res;
      /*    res.ipfsmetadata = this.metaNFT.param[1];
         if (this.metaNFT.chainId == '97') {
           res.net_img = "binance-Logo.png"; //BSC Tesnet
           this.metaNFT.net_node = "https://data-seed-prebsc-1-s3.binance.org:8545/";
         }
         if (this.metaNFT.chainId == '56') {
           res.net_img = "binance-Logo.png"; //BSC Mainnet
           this.metaNFT.net_node = "https://bsc-dataseed1.binance.org";
         }
         if (this.metaNFT.chainId == '648529') {
           res.net_img = "logo-lacchain-footer.png"; //Lacchain
           this.metaNFT.net_node = "http://18.230.79.100:4545";
         }
   
         this.dataNFT = res; */
    }, _err => {
      /*  loading.dismiss();
       this.goInicio(); */
    });
  }


  isNet(aNet) {
    if (aNet == 97) return "https://testnet.bscscan.com/";            //BSC Tesnet
    if (aNet == 56) return "https://bscscan.com/";                    //BSC Mainnet
    if (aNet == 648529) return "https://explorer.lacchain.net/";
  }

  async closeModal() {
    await this._modal.dismiss({ dataPersonal: null });
  }

  async getPk() {
    const modal = await this._modal.create({
      component: PinAccessComponent,
      componentProps: {
      }
    });

    modal.onDidDismiss().then(async (res: any) => {
      console.log('SSSSSSSSSSSSSSSSSSSS', res.data);
      if (this._fun.isVarInvalid(res.data.privateKey)) return;

      console.log('res.data.confirm', res.data.privateKey);
      this.singTx(res.data.privateKey);
      /* *********************** */

      /* ************************* */

    });
    return await modal.present();


  }




}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

import { sha256 } from 'js-sha256';
import { Web3jsService } from 'src/app/services/web3js.service';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';
import { StorageService } from 'src/app/services/storage.service';
import { Funciones } from 'src/app/compartido/funciones';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.page.html',
  styleUrls: ['./statement-form.page.scss'],
})
export class StatementFormPage implements OnInit {

  @ViewChild('slidesPadre', { static: false }) private slidesPadre: IonSlides;
  slideOpts = {
    allowSlideNext: false,
    allowSlidePrev: false,
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400
  };

  constructor(

    private _fun: Funciones,
    public _storage: StorageService,
    public _comp: IonicComponentsService,
    private web3: Web3jsService,
    private route: ActivatedRoute,
    private fun: Funciones,
    public router: Router) { }

  dataInfo: any = {
    to: '',
    data: ''
  };

  data: any;
  rawTransaction: any = null;

  dataToken: any;
  id = '';

  dataAPI: any;
  dataNFT: any = {
    name: '',
    description: '',
    image: '',
  };
  metaNFT: any = {
    chainId: '',
    contract: '',
    method: '',
    param: [],
    net_node: ''
  };

  ngOnInit() {
    this.getData();
  }

  async configData2() {
    const loading: any = await this._comp.presentLoading();
    let param = this.route.snapshot.paramMap.get('data');
    /*     let codeScane = '{n:"100",a:"9f73f937",c:"0x1Dc825F0772ab99E083b6dcff2d4d294deeD2509",m:"claimPOAP",p1:"<addr>:64",p2:"QmfZiYUwJuaX5NfCqdg9jXprkq7fXhUoccYWqdJitMmt9Y:256"}';
     */
    let codeScane = param;
    let valores = codeScane.split(",");
    console.log('codeScane...2', codeScane);
    console.log('valores', valores);

    for (let index = 0; index < valores.length; index++) {
      let valor: string = valores[index];
      valor = valor.replace('\"', '');
      valor = valor.replace('"', '');
      console.log('VALOOOR', valor);


      let code = valor.split(":")[0];
      let value = valor.split(":")[1]
      console.log('VALUE', value);


      if (code == 'n') this.metaNFT.chainId = value;
      /*       if (code == 'a') this.metaNFT.codeId = value; */
      else if (code == 'm') {
        this.metaNFT.method = value;
        /*      if(this.metaNFT.method!='crearPOAP') */
      }
      else if (code == 'c') this.metaNFT.contract = value;
      else if (code.substr(0, 1) == 'p') {

        if (value == '<addr>') {
          value = this.data.ADDRESS;
        }
        this.metaNFT.param.push(value);
      }


      if (index == (valores.length - 1)) {
        console.log('metaNFT', this.metaNFT);

        /*    this.web3.sendTxAPI(this.metaNFT.contract, this.metaNFT.method, this.metaNFT.chainId, this.metaNFT.param).subscribe((res: any) => {
             res.data.gas = '0x1166AE';
             this.dataAPI = res;
             console.log('dataAPI............1', this.dataAPI);
             loading.dismiss();
           }, _err => {
             loading.dismiss();
             this.goInicio();
           }); */

        this.web3.getDataToken(this.metaNFT.param[1]).subscribe((res: any) => {
          loading.dismiss();
/*           console.log('MOSTRAAAAAAAAAAR', res); */
          /*         res.image = res.image.replace('ipfs://', ''); */
          if (res.image.substr(0, 4) == 'ipfs') {
            let img = res.image.split('/');
            res.image = 'https://gateway.pinata.cloud/ipfs/' + img[img.length - 1];
          } else if (res.image.substr(0, 4) == 'http') {
            res.image = res.image;
          } else {
            this._fun.alertError('Imagende NTF inválido')
          }

          res.ipfsmetadata = this.metaNFT.param[1];

          /*      if (this.metaNFT.chainId == '97') {
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
      */
          this.dataNFT = res;
        }, _err => {
          loading.dismiss();
          this.goInicio();
        });

      }
    }

    console.log('this.dataInfo ', this.dataInfo);

  }




  getNode(chainId) {

    if (chainId == '97') {
      return ({
        net_img: "binance-Logo.png", //BSC Tesnet
        net_node: 'https://data-seed-prebsc-1-s3.binance.org:8545/'
      });
    }
    if (chainId == '56') {
      return ({
        net_img: "binance-Logo.png",//BSC Mainnet
        net_node: 'https://bsc-dataseed1.binance.org'
      });
    }
    if (chainId == '648529') {
      return ({
        net_img: "logo-lacchain-footer.png",//Lacchain
        net_node: 'http://18.230.79.100:4545'
      });
    }



  }

  getIcon(aNet) {
    if (aNet == '100') return ("https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png");           //xDAI Ethereum
    if (aNet == '3') return ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png");           //Ropsten Ethereum
    if (aNet == '43113' || aNet == "0xa869") return ("https://s2.coinmarketcap.com/static/img/coins/200x200/5805.png");           //Avax Tesnet
    if (aNet == '137') return ("/img/137.png");   //Polygon Tesnet
    if (aNet == '97') return ("/img/97.png");//BSC Tesnet
    if (aNet == '56') return ("/img/56.png"); //BSC Mainnet
    if (aNet == '648529') return ("/img/648529.png"); //Lacchain
  }

  configData() {
    let param = this.route.snapshot.paramMap.get('data');

    let codeScane = param;
    let valores = codeScane.split(",");
    console.log('codeScane...2', codeScane);
    console.log('valores', valores);

    this.dataInfo = {
      to: '',
      data: '',
    }

    let data = '';
    let contract = '';

    for (let index = 0; index < valores.length; index++) {
      let valor: string = valores[index];
      valor = valor.replace('\"', '');
      valor = valor.replace('"', '');
      console.log('VALOOOR', valor);


      let code = valor.split(":")[0];
      let value = valor.split(":")[1]
      if (code == 'a') data += '0x' + value;
      else if (code == 'c') this.dataInfo.to = value;
      else {
        /* PARAMETROS */
        console.log('PRIMER VALUE', value);

        if (value == '<addr>') value = this.data.ADDRESS.replace('0x', '');
        else if (value.substr(0, 2) != '0x') value = this.ascii_to_hex(value);
        else value = value.replace('0x', '');

        let size = valor.split(":")[2];

        console.log('param', value);
        console.log('size', size);

        let p = '0'.repeat(Number(size) - value.length) + value;
        console.log('aaaaaaaaaaa', p);
        data += p;

      }

      if (index == (valores.length - 1)) {
        this.dataInfo.data = data;
        console.log('DATA FINAL', this.dataInfo);
      }


      /*  if (code == 'c') contrato = valor.split(":")[1];
       if (code == 'i') identificador = valor.split(":")[1]; */
    }

    console.log('this.dataInfo ', this.dataInfo);

  }

  ascii_to_hex(str) {
    console.log('strtttttttttttttttttttt', str);

    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
      var hex = Number(str.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join('');
  }



  completeString(str, size) {
    let field = '';
  }

  async getData() {
    this.data = await this._storage.getLocalStorage('DATA');
    /* this.configData(); */
    this.configData2();

  }

  async singTx(privateKey) {

    const loading: any = await this._comp.presentLoading();
    console.log('privateKey......3', privateKey);

    this.rawTransaction = await this.web3.singTx(this.metaNFT.net_node, this.dataAPI.data, privateKey);
    console.log('this.rawTransaction', this.rawTransaction);

    loading.dismiss();
    if (this.fun.isVarInvalid(this.rawTransaction)) {
      this.goInicio();
      return;
    }

    this.sendTx();
  }


  async firmar() {
    let a = await this.fun.alert(env.MSG.TYPE_ALERT, 'Yes get', env.MSG.ALERT_TITLE, 'Is sure to get POAP?');
    if (this.fun.isVarInvalid(a)) return;
    this.nextSlidePadre();
  }

  async sendTx() {
    console.log('SENTX******************');
    const loading: any = await this._comp.presentLoading();
    let dataFin: any = await this.web3.sendTx(this.rawTransaction);
    console.log('dataFin', dataFin);

    if (this.fun.isVarInvalid(dataFin)) {
      loading.dismiss();
      this.backSlidePadre();
      return;
    }

    //POS - CLAIMPOAR
    if (this.metaNFT.method == 'claimPOAP') {

      let resclaim = await this.web3.posClaimPOAP(this.metaNFT.contract, this.metaNFT.net_node, this.metaNFT.chainId, this.metaNFT.param, dataFin.transactionHash, null)
      console.log('resclaim', resclaim);
      if (this.fun.isVarInvalid(resclaim)) {
        loading.dismiss();
        this.backSlidePadre();
        return;
      }
    }

    //SAVE IN APP POAP
    console.log('MOSTRAR', this.dataNFT);
    /*  this.dataNFT.chainId= this.metaNFT.chainId;
     this.dataNFT.tx = dataFin.transactionHash;
     this.dataNFT.timestamp = this._fun.timeStamp();
     this.dataNFT.p2 = this.metaNFT.p2;
     let firmas: any[] = await this._storage.getLocalStorage('FIRMAS') || [];
     firmas.unshift(this.dataNFT);
     await this._storage.setLocalStorage('FIRMAS', firmas); */
    loading.dismiss();
    await this.fun.alert(env.MSG.TYPE_SUC, ' Ok ', env.MSG.SUC_TITLE, env.MSG.SUC_SIGN);
    this.backSlidePadre();
    this.goInicio();
  }

  goInicio() {
    this.router.navigate(['/statements']);
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


  /* PIN */
  public dataSlideValid = {
    titulo: "Safety",
    subTitulo: "Enter PIN",
    texto: "Enter 6 digit pin"
  }

  pin = '';
  async getClave($event) {

    console.log('$event', $event);

    this.pin = $event;
    let hash_PINsha256 = sha256(sha256(this.pin.toString()));
    if (hash_PINsha256 == this.data.PIN) {
      /* this.getPOAP(); */

      let position = Number(this.pin.substr(0, 2));
      if (position > 62) position = position - 62;
      if (position == 0) position = 2;
      let n1 = Number(this.pin.substr(2, 2));
      let n2 = Number(this.pin.substr(4, 2))

      let dataSegure = this.data.privateKey.substr(62, this.data.privateKey.length);
      let number01 = Number(dataSegure.split("G")[0]) - n1;
      let number02 = Number(dataSegure.split("G")[1]) - n2;

      let privateKey = this.data.privateKey.substr(0, position)
        + number01.toString(16) + number02.toString(16) + this.data.privateKey.substring(position, 62);

      this.singTx(privateKey);
      this.nextSlidePadre();

    } else this._comp.presentToast('The PIN is not correct', 'danger', 2000);
  }


  async getPOAP() {
    const loading: any = await this._comp.presentLoading();
    this.web3.getPOAP(this.metaNFT.chainId, this.metaNFT.param[1], this.data.ADDRESS, this.metaNFT.contract).subscribe(async (res: any) => {
      console.log('RESPUESTA............1', res);
      if (res.code != '200') {
        loading.dismiss();
        this.goInicio();
        this.fun.alertError(res.message)
        return;
      }
      loading.dismiss();
      this.goInicio();
      await this.fun.alert(env.MSG.TYPE_SUC, ' Ok ', env.MSG.SUC_TITLE, env.MSG.SUC_SIGN);
      this.backSlidePadre();

    }, _err => {
      loading.dismiss();
      this.goInicio();
    });
  }

}

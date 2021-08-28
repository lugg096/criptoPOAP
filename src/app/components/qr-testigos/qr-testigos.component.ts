import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GenerarCodeQRComponent } from '../generar-code-qr/generar-code-qr.component';

@Component({
  selector: 'app-qr-testigos',
  templateUrl: './qr-testigos.component.html',
  styleUrls: ['./qr-testigos.component.scss'],
})
export class QrTestigosComponent implements OnInit {

  constructor(private _modal: ModalController,) { }

  llave: any;
  data: any = {
    cantTest: 0,
    description: "",
    minLimit: 0,
    title: "",
  };

  listCustodios = [];

  ngOnInit() {
    console.log('data', this.data);
    console.log('llave', this.llave);
    this.listCustodios = this.dividirFile(this.llave, this.data.cantTest);
    console.log('listCustodios', this.listCustodios);
  }

  verQR(code, index) {
    this._modal.create({
      component: GenerarCodeQRComponent,
      componentProps: {
        codeQR: code,
        texto: 'Código #'+(index+1),
        title: 'Custodio'
      }
    }).then((modal) => modal.present());
  }

  dividirFile(strB64_G, varDiv_G) {

    let lengthB64_G = strB64_G.length;
    /* DIVIDIR ARCHIVO EN PARTES */
    let resto_G = lengthB64_G % varDiv_G;
    let lengthBloque_G = (lengthB64_G - resto_G) / varDiv_G;
    let arrayB64_G = [];
    /*     console.log('lengthB64', lengthB64_G); */
    for (let index = 0; index < varDiv_G; index++) {
      if (index != (varDiv_G - 1)) arrayB64_G.push(strB64_G.substring(index * lengthBloque_G, (index * lengthBloque_G) + lengthBloque_G));
      else arrayB64_G.push(strB64_G.substring(index * lengthBloque_G, (index * lengthBloque_G) + lengthBloque_G + resto_G));
    }
    return arrayB64_G;
  }

  closeModal() {
    this._modal.dismiss({ dataPersonal: null });
  }

  Continue() {
    this._modal.dismiss({
      dataPersonal: {}
    });
  }



}

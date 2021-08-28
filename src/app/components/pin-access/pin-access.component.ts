import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { sha256 } from 'js-sha256';
import { IonicComponentsService } from 'src/app/services/ionic-components.service';

@Component({
  selector: 'app-pin-access',
  templateUrl: './pin-access.component.html',
  styleUrls: ['./pin-access.component.scss'],
})
export class PinAccessComponent implements OnInit {

  constructor(
    public _comp: IonicComponentsService,
    public _storage: StorageService,
    private _modal: ModalController) { }
  data:any;
  ngOnInit() { 
    this.getData();
  }

  async getData() {
    this.data = await this._storage.getLocalStorage('DATA');
  }

  closeModal(privateKey?) {
    this._modal.dismiss({
      privateKey
    });
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
      console.log('this.data', this.data);
      this.pin = $event;
      console.log('this.pin',this.pin);
      
      let hash_PINsha256 = sha256(sha256(this.pin.toString()));
      console.log('hash_PINsha256',hash_PINsha256);
      console.log('this.data.PIN',this.data.PIN);
      if (hash_PINsha256 == this.data.PIN) {
  
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
  
       console.log('privateKey',privateKey);
       this.closeModal(privateKey);
  
      } else this._comp.presentToast('The PIN is not correct', 'danger', 2000);
  
    }
  
}

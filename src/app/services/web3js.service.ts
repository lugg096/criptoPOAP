import { Injectable } from '@angular/core';
import Web3 from "web3";
import { Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Funciones } from '../compartido/funciones';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Web3jsService {

  private web3js: any;
  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor(
    private _http: HttpClient,
    private _storage: StorageService,
    private fun: Funciones) { }

  account(aHash?) {
    return new Promise((resolve, reject) => {
      this.web3js = new Web3(new Web3.providers.HttpProvider(env.node));
      var xcuenta;
      if (this.fun.isVarInvalid(aHash)) xcuenta = this.web3js.eth.accounts.create(this.web3js.utils.randomHex(32));
      else xcuenta = this.web3js.eth.accounts.privateKeyToAccount(aHash);
      resolve(xcuenta);
    });
  }

  getPOAP(chainId, p2, pk, contract) {
    let aURL = env.stmp + "/v1/db/setpost/?type=getapoap&chainid=" + chainId + "&ipfsmetadata=" + p2 + "&address=" + pk + "&token=mZA29dm7mnXcZaad12_47LLkl43&node=&contract=" + contract;
    console.log('aURL', aURL);
    return this._http.get(aURL);
  }


  singTx(net_node, data, privateKey) {
    return new Promise(async (resolve, reject) => {
      this.web3js = new Web3(new Web3.providers.HttpProvider(net_node));
      let txJSON = data;/* {
        to,
        data,
        value: "0x0",
        chainId: '0x9E551',//constante por que cambia dependiente la red, lacchain
        gasLimit: "0xDBBA0",
        gasPrice: "0x0"
      } */


      /*    let txJSON = { to: "0x32aA0d76f3ac305030bDc091cB774CDB120AFeb3", data: "0x9f73f937000000000000000000000000828831030210e162b68296b31e2d0fa964d5d4040000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e516d534839473676486a3241695864696f594366766469646a576637777164457a743672506d7a44367a435a6231", chainId: "648529", gas: "0x12e1fc0", value: "0x0" }
      */

      console.log('txJSON....MAPEO', txJSON);


      //Transacción firmada
      this.web3js.eth.accounts.signTransaction(txJSON, privateKey).then(async function (raw) {
        console.log('RAW....MAPEO', raw);

        if (!raw) {
          resolve(null);
          await this.fun.alert(env.MSG.TYPE_ERROR, 'ok', env.MSG.ERROR_TITLE, env.MSG.ERROR_GENERAL);
        }
        resolve(raw.rawTransaction);
      }).catch(async err => {
        resolve(null);
        await this.fun.alert(env.MSG.TYPE_ERROR, 'ok', env.MSG.ERROR_TITLE, err);

      });
    });
  }

  sendTx(rawTransaction) {
    return new Promise(async (resolve, reject) => {
      this.web3js.eth.sendSignedTransaction(rawTransaction).then(async function (receipt) {
        console.log('raw', receipt)
        if (!receipt) {
          resolve(null);
          await this.fun.alert(env.MSG.TYPE_ERROR, 'ok', env.MSG.ERROR_TITLE, env.MSG.ERROR_GENERAL);
        }
        resolve(receipt);
      }).catch(async err => {
        resolve(null);
        await this.fun.alert(env.MSG.TYPE_ERROR, 'ok', env.MSG.ERROR_TITLE, err);

      });
    });
  }



  sendTxAPI(contract, metodo, chainid, parm) {

    console.log('PATAMETRO...1', contract);
    console.log('PATAMETRO...2', metodo);
    console.log('PATAMETRO...3', parm);

    let TokenStamping = '18b22960dff87d346b9ae90c2f958391ba59310e46946151262683bad54';
    let nodeBlockchain = 'http://18.230.79.100:4545';
    let params = '';
    for (let index = 0; index < parm.length; index++) {
      params += '&param' + (index + 1) + '=' + parm[index];
    }
    const URL = "https://contract.stamping.io/v1/send/?token=" + TokenStamping + "&contract=" + contract + "&method=" + metodo + params + "&async=false&node=" + nodeBlockchain + "&chainid=" + chainid;

    console.log('URL', URL);

    return this._http.get(URL);
  }

  //CUANDO TERMINE SATISFACTORIAMETE EL METODO CLAIMPOAP (Obtener POAPs)
  posClaimPOAP(contract, network, chainid, parm, tx, addrx, burn?) {
    console.log('addrx', addrx);


    const params: any = {
      token: env.TokenStamping,
      contract,
      address: parm[0],//p1
      ipfsmetadata: parm[1],//p2
      network,
      chainid,
      tx
    }

    let metodoStapm = 'set';
    if (addrx) {//SOLO CUANDO ES TRANSFER
      metodoStapm = 'transfer',
        params.from = addrx;
    }

    if (burn) {
      params.burn = true;
    }

    console.log('params', params);

    let URL = 'https://contract.stamping.io/v1/db/' + metodoStapm + '/?type=hold';
    console.log('URL..........', URL);

    return this._http.get(URL, { params }).toPromise();
  }

  getDataWallet(address) {
    const params = {
      address
    }
    let URL = 'https://contract.stamping.io/v1/db/get/';
    return this._http.get(URL, { params }).toPromise();
  }


  getDataToken(id) {
    const URL = "https://gateway.pinata.cloud/ipfs/" + id;
    console.log('URL', URL);
    return this._http.get(URL);
  }

  async connectAccount() {
    var nodeIP = 'http://18.230.79.100:4545';
    this.web3js = new Web3(new Web3.providers.HttpProvider(nodeIP)); // create web3 instance
    console.log('this.web3js', this.web3js);
    this.web3js.transactionConfirmationBlocks = 1;

    var aHash = "0xd8f6349f58f2b24ab33ca14f75fc2cfe4728271eadccf19a71e3e07029203c54";
    var xcuenta = this.web3js.eth.accounts.privateKeyToAccount(aHash);
    console.log('xcuenta', xcuenta);

    console.log('address', this.web3js.eth.accounts.hashMessage(xcuenta.address));
    console.log('publicKey', xcuenta.address);
    console.log('privateKey', xcuenta.privateKey);

    var message = "Hola";
    var addressTo = '0xf6F19629bC7DBd76A6ce8C08b66b0bF8f9061F62';



    var nonceValue = await this.web3js.eth.getTransactionCount(addressTo);
    console.log('nonceValue', nonceValue);
    const txObject = {
      to: addressTo,
      nonce: nonceValue,
      value: this.web3js.utils.numberToHex(0),
      gas: this.web3js.utils.numberToHex(9000000),
      gasPrice: this.web3js.utils.numberToHex(0),
      data: this.web3js.utils.fromAscii(message)
    };

    console.log('txObject', txObject);

    this.web3js.eth.accounts.signTransaction(txObject, xcuenta.privateKey).then(function (rawTransaction) {
      console.log('FINAL', rawTransaction.rawTransaction)
    });

  }
}

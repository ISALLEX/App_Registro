import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from 'src/app/services/helper.service';
import { ResulQrPage } from 'src/app/modals/resul-qr/resul-qr.page';


@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  resultQr:any='';

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }

  async scanner(){
    this.resultQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.resultQr));
    await this.modalResultQr();
  }

  async modalResultQr(){
    var qr = [];
    qr.push(this.resultQr);
    const parametros={dataQr: this.resultQr}
    await this.helper.showModal(ResulQrPage,parametros,false);
  }

}

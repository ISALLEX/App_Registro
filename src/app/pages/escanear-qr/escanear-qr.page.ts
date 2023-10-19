import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  resultQr:any='';

  constructor() { }

  ngOnInit() {
  }

  async scanner(){
    this.resultQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.resultQr));
  }

}

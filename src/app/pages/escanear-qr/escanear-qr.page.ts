import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { HelperService } from 'src/app/services/helper.service';
import { ResulQrPage } from 'src/app/modals/resul-qr/resul-qr.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Asistencia } from 'src/app/models/asistencia';


@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  resultQr:any[]=[];
  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  constructor(private helper:HelperService,
             ) { }

  ngOnInit() {
  }

  

  

  async scan(){
    var resultadoQr = (await BarcodeScanner.scan()).code;
     
    if (resultadoQr) {
      console.log("QR", JSON.parse(resultadoQr));
    }
    var infoQr = [];
    infoQr.push(
      {
        asignatura:this.asignatura,
        docente:this.docente,
        fecha:this.fecha,
        hora:this.hora,
        leccion:this.leccion,
        sala:this.sala,
        seccion:this.seccion,


      
        },
      
              );

              const parametros = {dataQr:infoQr};
    
    this.helper.showModal(ResulQrPage,parametros);

  }

  

  async mostrarCamera(){
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera
    });
    const fotoUrl = foto.dataUrl;


  }


}

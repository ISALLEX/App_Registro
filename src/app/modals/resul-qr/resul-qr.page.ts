import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-resul-qr',
  templateUrl: './resul-qr.page.html',
  styleUrls: ['./resul-qr.page.scss'],
})
export class ResulQrPage implements OnInit {

  
  @Input() dataQr:any;
  dataAsistencia:any;

  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  constructor(private modalController:ModalController,
              private storageService:StorageService,
            ) { }

  ngOnInit() {

    console.log("Propiedades recibidas-->",this.dataQr);
  }

  close(){
    this.modalController.dismiss();
  }


  async registroA(){

    var asistencia = 
    [
      {
        asignatura : this.asignatura ,
        docente: this.docente,
        fecha:this.fecha,
        hora: this.hora,
        leccion : this.leccion,
        sala: this.sala,
        seccion: this.seccion
      }
    ]
    try{
      this.storageService.guardarAsistencia(asistencia);
    }catch{
      
    }

  }

  
}

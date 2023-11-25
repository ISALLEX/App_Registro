import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-resul-qr',
  templateUrl: './resul-qr.page.html',
  styleUrls: ['./resul-qr.page.scss'],
})
export class ResulQrPage implements OnInit {

  @Input() asistencias:any;
  infoQr: any;
  
  dataAsistencia:any;

  nombre:string = "";
  asignatura:any;
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";

  constructor(private modalController:ModalController,
              private storageService:StorageService,
              private asistenciaService:AsistenciaService,
              private helper:HelperService,
              private router:Router,
              private navParams: NavParams
              
            ) {   this.infoQr = this.navParams.get('dataQr');
                  console.log('Info QR:', this.infoQr)}

  ngOnInit() {

    this.vistaAsistencia();
  }

  close(){
    this.modalController.dismiss();
  }

 

  async vistaAsistencia(){
    console.log("ASISTENCIA STORAGE",await this.asistenciaService.obtenerAsistencia());
  }


  async guardarAsistencia(){

    this.modalController.dismiss({
      infoQr: this.infoQr
    });

    this.asistenciaService.guardarAsistencia(this.infoQr);
    await this.helper.mostrarAlerta("Debe revisar su asistencia","Información");
    

  }

 


  

  
}

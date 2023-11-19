import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-resul-qr',
  templateUrl: './resul-qr.page.html',
  styleUrls: ['./resul-qr.page.scss'],
})
export class ResulQrPage implements OnInit {

  asistencias:any = {};

  
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
              private asistenciaService:AsistenciaService,
              private helper:HelperService,
              private router:Router
              
            ) { }

  ngOnInit() {

    console.log("Propiedades recibidas-->",this.asistencias);
    this.vistaAsistencia();
  }

  close(){
    this.modalController.dismiss();
  }

  async guardarAsistencia() {
    // Asegúrate de que todos los campos estén llenos
    if (!this.asistencias.asignatura || !this.asistencias.docente || !this.asistencias.fecha ||
        !this.asistencias.hora || !this.asistencias.leccion || !this.asistencias.sala || !this.asistencias.seccion )  {
          await this.helper.mostrarAlerta("Debe revisar su asistencia","Información");
          await this.router.navigateByUrl("menu");
      return;
    }

    this.asistenciaService.guardarAsistencia(this.asistencias);
    await this.router.navigateByUrl('menu');
    await this.helper.mostrarAlerta("Asistencia registrada correctamente","Información");  

    // Limpia el formulario después de guardar
    this.asistencias = {};
  }

  async vistaAsistencia(){
    console.log("ASISTENCIA STORAGE",await this.asistenciaService.obtenerAsistencia());
  }

 


  

  
}

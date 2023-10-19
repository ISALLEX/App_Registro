import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { Asistencia } from 'src/app/models/asistencia';
import { Route } from '@angular/router';
@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  asignatura: string = "";
  docente: string = "";
  fecha: string = "";
  hora: string = "";
  leccion: string = "";
  sala: string = "";
  seccion: string = "";

  constructor( private helper:HelperService,
               private storageService:StorageService,
               private router:Router,
               private route:ActivatedRoute

            ) { }

  ngOnInit() {
    this.vistaAsistencia();

    
  }

  async vistaAsistencia(){
    console.log("ASISTENCIA STORAGE",await this.storageService.obtenerAsistencia());
  }

  async registroA(){

    const loader = await this.helper.showLoader("Cargando");

    try{

      var asistencia = 
      [
        {
          asignatura:this.asignatura,
          docente:this.docente,
          fecha:this.fecha,
          hora: this.hora,
          leccion:this.leccion,
          sala: this.sala,
          seccion:this.seccion
        
        }
      ]

      this.storageService.guardarAsistencia(asistencia);

      await this.router.navigateByUrl('menu');
      await loader.dismiss();
      await this.helper.mostrarAlerta("Asistencia registrada correctamente", "Información");


    }  catch (error:any) {

    }

    

    
  
 }

 volverM(){
  this.router.navigateByUrl("menu")
 }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';
@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

 asistencias: any;
 nasignatura:string = "";
  ndocente:string = "";
  nfecha:string = "";
  nhora:string = "";
  nleccion:string = "";
  nsala:string = "";
  nseccion:string = "";




  constructor(
              private asistenciaService:AsistenciaService,
              private router:Router,
            

            ) { }

  ngOnInit() {
    this.cargarAsistencia();
 

}


 volverM(){
  this.router.navigateByUrl("menu")
 }

 ionViewDidEnter() {

 
}

async cargarAsistencia(){
  console.log("ASISTENCIA GUARDADA",await this.asistenciaService.obtenerAsistencia());
  this.asistencias = (await this.asistenciaService.obtenerAsistencia());
  this.nasignatura =  this.asistencias[0].asignatura;
  this.ndocente =  this.asistencias[0].docente;
  this.nfecha =  this.asistencias[0].fecha;
  this.nhora =  this.asistencias[0].hora;
  this.nleccion =  this.asistencias[0].leccion;
  this.nsala =  this.asistencias[0].sala;
  this.nseccion =  this.asistencias[0].seccion;
  
}

eliminarAsistencia(asistencia: any) {
  // Encuentra el índice de la asistencia en la lista
  const index = this.asistencias.indexOf(asistencia);

  // Elimina la asistencia del array
  if (index !== -1) {
    this.asistencias.splice(index, 1);
  }
}


}

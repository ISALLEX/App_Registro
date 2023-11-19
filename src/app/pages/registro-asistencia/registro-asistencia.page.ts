import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AsistenciaService } from 'src/app/services/asistencia.service';
@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  asistencias: any[] = [];





  constructor( 
              private asistenciaService:AsistenciaService,
              private router:Router,
            

            ) { }

  ngOnInit() {
 

}


 volverM(){
  this.router.navigateByUrl("menu")
 }

 ionViewDidEnter() {

  this.actualizarAsistencia();
}

actualizarAsistencia() {
  this.asistencias = this.asistenciaService.obtenerAsistencia();
}

}

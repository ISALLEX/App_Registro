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

  arrayAsig:Asistencia[]=[

  {
    asignatura : "ENG4567",
    docente:"Carlos Fernández",
    fecha:"24-09-2023",
    hora: "10:45",
    leccion : "Inglés Avanzado",
    sala: "Aula 205",
    seccion: "002D",
   
    
},
{
  asignatura : "HIS7890",
  docente: "Isabel Gómez",
  fecha: "25-09-2023",
  hora: "13:20",
  leccion : "Historia Contemporánea",
  sala: "Aula 301",
  seccion: "002D",
  
},
{
  asignatura : "BIO2345",
  docente: "Luis Ramirez",
  fecha:"26-09-2023",
  hora: "15:00",
  leccion : "Biología Celular",
  sala: "Laboratorio 7",
  seccion: "002D",
 
},
{
  asignatura : "CHE6789",
  docente: "Elena Torres",
  fecha: "27-09-2023",
  hora: "08:55",
  leccion : "Química Orgánica",
  sala: "Aula 110",
  seccion: "002D",
 
},
{
  asignatura :"ART1234",
  docente:"Pablo Martinez",
  fecha: "28-09-2023",
  hora: "12:10",
  leccion : "Arte Contemporáneo",
  sala: "Sala de Arte",
  seccion: "002D",
 
},
{
  asignatura : "ECON5678",
  docente: "Laura García",
  fecha:"29-09-2023",
  hora: "09:15",
  leccion : "Economía Internacional",
  sala: "Aula 303",
  seccion: "002D",

},
{
  asignatura : "PHY3456",
  docente:"Roberto Pérez",
  fecha:"30-09-2023",
  hora: "14:30",
  leccion : "Física Nuclear",
  sala: "Laboratorio 6",
  seccion: "002D",
},
{
  asignatura : "MKT9012",
  docente:"Sandra Fernández",
  fecha:"01-10-2023",
  hora: "11:45",
  leccion : "Marketing Estratégico",
  sala: "Aula 108",
  seccion: "002D",
  
},
{
  asignatura : "HIS1234",
  docente:"Pedro Sánchez",
  fecha:"02-10-2023",
  hora: "16:05",
  leccion : "Historia Antigua",
  sala: "Aula 201",
  seccion: "002D",
  
},
{
  asignatura : "CS4567",
  docente: "Sofía López",
  fecha:"03-10-2023",
  hora: "10:00",
  leccion : "Ciencias de la Computación",
  sala: "Laboratorio 4",
  seccion: "002D",
 
},
{
  asignatura : "LIT7890",
  docente: "Marta Fernández",
  fecha:"04-10-2023",
  hora: "13:45",
  leccion : "Literatura Universal",
  sala: "Aula 306",
  seccion: "002D",
 
},
{
  asignatura : "ECO1234",
  docente: "Andrés Gómez",
  fecha: "05-10-2023",
  hora: "09:30",
  leccion : "Economía Microeconómica",
  sala: "Aula 109",
  seccion: "002D",
 
},
{
  asignatura : "CHE5678",
  docente:"Lucía Rodríguez",
  fecha:"06-10-2023",
  hora: "15:20",
  leccion : "Química Inorgánica",
  sala: "Laboratorio 8",
  seccion: "002D",
  
},
{
  asignatura : "ART9012",
  docente:"Diego Pérez",
  fecha:"07-10-2023",
  hora: "11:10",
  leccion : "Historia del Arte",
  sala: "Sala de Arte",
  seccion: "002D",
 
},
{
  asignatura : "MKT2345",
  docente: "Natalia Martínez",
  fecha:"08-10-2023",
  hora: "16:45",
  leccion : "Investigación de Mercados",
  sala: "Aula 112",
  seccion: "002D",
 
},

]

  constructor( private helper:HelperService,
               private storageService:StorageService,
               private router:Router,
               private route:ActivatedRoute

            ) { }

  ngOnInit() {
 

}


 volverM(){
  this.router.navigateByUrl("menu")
 }
}

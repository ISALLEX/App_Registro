import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo:string = "";
  contrasenna:string = "";
  nombre:string = "";
  rut:string ="";

  constructor(private router:Router,
              private auth:AngularFireAuth,
              private helper:HelperService,
              private storageService:StorageService,

            ) { }

  ngOnInit() {

    this.vistaUser();

  }

  volver(){
    this.router.navigateByUrl("login");
  }

  async vistaUser(){
    console.log("USUARIOS STORAGE",await this.storageService.obtenerUser());
  }

  async registro(){
    const loader = await this.helper.showLoader("Cargando");
    if (this.correo == '') {
      await loader.dismiss(); 
      await this.helper.mostrarAlerta("Debe ingresar un correo","Error");
      return;
    }
      var user = 
      [
        {
          email:this.correo,
          nombre:this.nombre,
          rut:this.rut
        
        }
      ]
      try {
        const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.contrasenna);
          this.storageService.guardarUsuario(user);
        await this.router.navigateByUrl('login');
        await loader.dismiss(); 
        await this.helper.mostrarAlerta("Usuario registrado correctamente","Información");  
        } catch (error:any) {
          if (error.code == 'auth/email-already-in-use') {
            await loader.dismiss();
            await this.helper.mostrarAlerta("El correo ya se encuentra registrado.","Error");
          }
          if (error.code == 'auth/invalid-email') {
            await loader.dismiss();
            await this.helper.mostrarAlerta("El correo no es el correcto.","Error");
          }
          if (error.code == 'auth/weak-password') {
            await loader.dismiss();
            await this.helper.mostrarAlerta("El largo de la contraseña es muy corto.","Error");
          }
        }     

  }
  
  

}

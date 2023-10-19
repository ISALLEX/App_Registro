import { Component, OnInit } from '@angular/core';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Routes } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasenna:string = "";
  mensage: string = "";


  constructor(private router:Router, 
              private helperService:HelperService,
              private modalCtrl:ModalController, 
              private route:ActivatedRoute,
              private navCtrl:NavController,
              private userService: UserService,
              private storage:StorageService,
              private auth:AngularFireAuth

            ) { }

  ngOnInit() {
  }

  async login(){
    if (this.email == "") {
    
      this.helperService.mostrarAlerta("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasenna == "") {
      alert("Debe ingresar una contraseña.");
      return;
    }
    
    try {
      const req = await this.auth.signInWithEmailAndPassword(this.email,this.contrasenna);
      this.storage.userEmail = this.email;
      console.log("TOKEN", await req.user?.getIdToken());
      await this.router.navigateByUrl("menu");
    } catch (error) {
      
    }

 }

 registro(){
  this.router.navigateByUrl("registro");
}

async obrirModal() {
  const modal = await this.modalCtrl.create({
    component: ResetPasswordPage,
  });
  modal.present();

  const { data, role } = await modal.onWillDismiss();

}

}

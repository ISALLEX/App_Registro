import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  correo: string="";

  constructor(private router:Router,
              private helper:HelperService,
              private auth: AngularFireAuth,
              private modalCtrl: ModalController
          
           
            ) { }

  ngOnInit() {
  }



  async resetearContra(){
    const loader = await this.helper.showLoader("Cargando");
    if (this.correo == '') {
      await loader.dismiss();
      this.helper.mostrarAlerta("Debe ingresar un correo." ,"Error");
      return;
    }
    try {
      await this.auth.sendPasswordResetEmail(this.correo);
      await this.helper.mostrarAlerta("Debe revisar su correo","Información");
      await loader.dismiss();
      await this.router.navigateByUrl("login");
    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helper.mostrarAlerta("El correo no es el correcto.","Error");
      }
    }
  }

  volverlogin(){
    this.router.navigateByUrl("login")
  }

  cancelar() {
    return this.modalCtrl.dismiss(null, 'cancelar');
  }

}

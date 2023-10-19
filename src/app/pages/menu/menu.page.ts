import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IonCard } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { Animation } from '@ionic/angular';
import { AnimationController} from '@ionic/angular';
import { QueryList } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";
  rutUsuario:string = "";


  
  @ViewChild (IonCard, {read:ElementRef})
  card!: ElementRef<HTMLIonCardElement>;

  email: string | null;

  private animation!: Animation

  constructor(private menuCtrl: MenuController,
              private router:Router,
              private helper:HelperService,
              private animationCtrl: AnimationController,
              private route: ActivatedRoute ,
              private userService: UserService,
              private storage:StorageService,
              private auth:AngularFireAuth 

            ) { 
              this.email = this.userService.getUserEmail();
              if (this.email === null) {
                this.email = 'Correo no disponible';
              }
            }

  ngOnInit() {
    this.cargarUsuario();
  }

  abrirMenuUno() {

    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }

  abrirMenuDos() {
    this.menuCtrl.enable(true, 'second-menu');
    this.menuCtrl.open('second-menu');
  }

  abrirMenuTres() {
    this.menuCtrl.open('end');
  }

 async desLogin(){
  var corfirmar = await this.helper.mostrarConfirmar("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }

  abrirPerfil(){
    this.router.navigateByUrl("perfil");
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  verAsistencia(){
    this.router.navigateByUrl("registro-asistencia")
  }

  abrirQr(){
    this.router.navigateByUrl("escanear-qr");
  }

  async cargarUsuario(){
    console.log("USUARIO STORAGE",await this.storage.obtenerUser());
    console.log("PROPIEDAD SERVICE STORAGE",this.storage.userEmail);

    var user = await this.auth.currentUser;

    this.usuario = (await this.storage.obtenerUser()).filter(e => e.email == user?.email);
    this.nombreUsuario =  this.usuario[0].nombre;
    this.rutUsuario =  this.usuario[0].rut;
  }


}

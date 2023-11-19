import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";
  rutUsuario:string = "";
  @ViewChild (IonCard, {read:ElementRef})
  card!: ElementRef<HTMLIonCardElement>;

  parametronumeroUno:number | undefined;

  

    private animation!: Animation;


  constructor(private menuCtrl: MenuController,
              private router:Router,
              private animationCtrl:AnimationController,
              private userService: UserService,
              private storage:StorageService,
              private auth:AngularFireAuth,
              private activatedRoute:ActivatedRoute


            ) { }

  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    this.cargarUsuario1();
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
  }

  volver1(){
    this.router.navigateByUrl("menu");
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }
  hola(){
    this.animation.play();
  }
  adios(){
    this.animation.stop();
  }

  
  
  async cargarUsuario1(){
    console.log("USUARIO STORAGE",await this.storage.obtenerUser());
    console.log("PROPIEDAD SERVICE STORAGE",this.storage.userEmail);

    var user = await this.auth.currentUser;

    this.usuario = (await this.storage.obtenerUser()).filter(e => e.email == user?.email);
    this.nombreUsuario =  this.usuario[0].nombre;
    this.rutUsuario =  this.usuario[0].rut;
    
  }
}

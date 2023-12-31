import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IonCard, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { Animation } from '@ionic/angular';
import { AnimationController} from '@ionic/angular';
import { QueryList } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { JokeService } from 'src/app/services/joke.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";
  rutUsuario:string = "";

  arrayMenu:Menu[]=[];

  loading:boolean = true;

  
  chiste: string="";
  

 


  
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
              private auth:AngularFireAuth,
              public toastController: ToastController,
              private navCtrl: NavController,
              private jokeService: JokeService
             
              

            ) { 
              this.email = this.userService.getUserEmail();
              if (this.email === null) {
                this.email = 'Correo no disponible';
              }
            }

  ngOnInit() {
    this.cargarUsuario();

    console.log("inicio del componente");

    this.cargarMenu();

    setTimeout(this.simularCargaPerfil, 4000);


  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'ASISTENCIA SECCION: 002D',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async mostrarToast2() {
    const toast = await this.toastController.create({
      message: 'ESCANE SU CODIGO',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async mostrarToast3() {
    const toast = await this.toastController.create({
      message: 'INFORMACION PERSONAL',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


 async desLogin(){
  var corfirmar = await this.helper.mostrarConfirmar("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }

  async abrirPerfil(){
    const loader = await this.helper.showLoader("Cargando");
    this.router.navigateByUrl("perfil");
    await loader.dismiss();
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

 async verAsistencia(){
    const loader = await this.helper.showLoader("Cargando");
    this.router.navigateByUrl("registro-asistencia")
    await loader.dismiss();
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

  cargarMenu(){
    this.arrayMenu.push
    (
      {
        id:1,
        titulo:"Perfil",
        icono:"person-outline",
        url:"/SECCION002D/perfil",
        disabled:true
      },
    )
  }

  simularCargaPerfil = () => {
    this.loading = false;
  }
  
  

  



Perfil(){
  var parametroN1 = 123456;
  this.router.navigateByUrl(parametroN1 + "/perfil");
}

ngOnDestroy(): void {
  console.log("Destruyendo la vista");
}


ionViewWillEnter(){
  console.log("Entrando a la vista");
}

ionViewDidEnter(){
  console.log("Vista cargada");
}

ionViewWillLeave(){
  console.log("Abandonando la vista");
}

ionViewDidLeave(){
  console.log("Abandonó la vista");
  this.menuCtrl.close();
}
obtenerChisteProgramacion() {
  this.jokeService.obtenerChisteProgramacion().subscribe(
    (data: any) => {
      if (data.type === 'twopart') {
        this.chiste = `${data.setup} ${data.delivery}`;
      } else if (data.type === 'single') {
        this.chiste = data.joke;
      } else {
        this.chiste = 'No se pudo obtener un chiste válido.';
      }
    },
    error => {
      console.error('Error al obtener el chiste:', error);
    }
  );
}
}

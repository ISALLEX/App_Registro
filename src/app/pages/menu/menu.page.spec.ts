import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations:[MenuPage],providers:[ModalController,AngularDelegate,ActivatedRoute],
    imports:[IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,HttpClientTestingModule]});
    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

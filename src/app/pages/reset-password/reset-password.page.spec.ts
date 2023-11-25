import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordPage } from './reset-password.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { InjectionToken } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResetPasswordPage', () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations:[ResetPasswordPage],providers:[ModalController,AngularDelegate,InjectionToken],imports:[IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,HttpClientTestingModule]});
    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

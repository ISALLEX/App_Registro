import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResulQrPage } from './resul-qr.page';
import { AngularDelegate, ModalController, NavParams } from '@ionic/angular';

describe('ResulQrPage', () => {
  let component: ResulQrPage;
  let fixture: ComponentFixture<ResulQrPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ResulQrPage],providers:[ModalController,AngularDelegate,NavParams]});
    fixture = TestBed.createComponent(ResulQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

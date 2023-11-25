import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearQrPage } from './escanear-qr.page';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('EscanearQrPage', () => {
  let component: EscanearQrPage;
  let fixture: ComponentFixture<EscanearQrPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [EscanearQrPage],providers:[ModalController,AngularDelegate]});
    fixture = TestBed.createComponent(EscanearQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

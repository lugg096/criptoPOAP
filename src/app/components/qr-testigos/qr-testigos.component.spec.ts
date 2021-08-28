import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrTestigosComponent } from './qr-testigos.component';

describe('QrTestigosComponent', () => {
  let component: QrTestigosComponent;
  let fixture: ComponentFixture<QrTestigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrTestigosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrTestigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatementFormPage } from './statement-form.page';

describe('StatementFormPage', () => {
  let component: StatementFormPage;
  let fixture: ComponentFixture<StatementFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatementFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

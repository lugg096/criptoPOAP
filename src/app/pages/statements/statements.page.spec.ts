import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatementsPage } from './statements.page';

describe('StatementsPage', () => {
  let component: StatementsPage;
  let fixture: ComponentFixture<StatementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

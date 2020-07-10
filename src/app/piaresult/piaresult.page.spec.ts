import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaresultPage } from './piaresult.page';

describe('PiaresultPage', () => {
  let component: PiaresultPage;
  let fixture: ComponentFixture<PiaresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

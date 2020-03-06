import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaCareersPage } from './pia-careers.page';

describe('PiaCareersPage', () => {
  let component: PiaCareersPage;
  let fixture: ComponentFixture<PiaCareersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaCareersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaCareersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

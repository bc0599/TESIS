import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaAboutUsPage } from './pia-about-us.page';

describe('PiaAboutUsPage', () => {
  let component: PiaAboutUsPage;
  let fixture: ComponentFixture<PiaAboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaAboutUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaAboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

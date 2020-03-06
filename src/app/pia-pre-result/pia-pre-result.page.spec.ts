import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaPreResultPage } from './pia-pre-result.page';

describe('PiaPreResultPage', () => {
  let component: PiaPreResultPage;
  let fixture: ComponentFixture<PiaPreResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaPreResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaPreResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

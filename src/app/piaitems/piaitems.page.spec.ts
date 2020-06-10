import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaitemsPage } from './piaitems.page';

describe('PiaitemsPage', () => {
  let component: PiaitemsPage;
  let fixture: ComponentFixture<PiaitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaitemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

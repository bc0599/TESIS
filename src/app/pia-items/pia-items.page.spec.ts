import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiaItemsPage } from './pia-items.page';

describe('PiaItemsPage', () => {
  let component: PiaItemsPage;
  let fixture: ComponentFixture<PiaItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiaItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiaItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

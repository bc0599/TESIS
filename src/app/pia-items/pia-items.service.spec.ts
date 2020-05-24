import { TestBed } from '@angular/core/testing';

import { PiaItemsService } from './pia-items.service';

describe('PiaItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiaItemsService = TestBed.get(PiaItemsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UpdateCartService } from './update-cart.service';

describe('UpdateCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCartService = TestBed.get(UpdateCartService);
    expect(service).toBeTruthy();
  });
});

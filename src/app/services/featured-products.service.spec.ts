import { TestBed } from '@angular/core/testing';

import { FeaturedProductsService } from './featured-products.service';

describe('FeaturedProductsService', () => {
  let service: FeaturedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

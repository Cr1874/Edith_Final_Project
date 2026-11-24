import { TestBed } from '@angular/core/testing';
import { Reviews } from './reviews';

// Test suite for the Reviews service.
describe('Reviews', () => {
  let service: Reviews;

  // Before each test, configure the testing module and inject the Reviews service.
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reviews);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AvengersService } from './avengers.service';

describe('AvengersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvengersService = TestBed.get(AvengersService);
    expect(service).toBeTruthy();
  });
});

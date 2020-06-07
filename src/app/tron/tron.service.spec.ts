import { TestBed } from '@angular/core/testing';

import { TronService } from './tron.service';

describe('TronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TronService = TestBed.get(TronService);
    expect(service).toBeTruthy();
  });
});

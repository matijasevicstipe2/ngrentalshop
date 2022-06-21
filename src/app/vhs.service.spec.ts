import { TestBed } from '@angular/core/testing';

import { VhsService } from './vhs.service';

describe('VhsService', () => {
  let service: VhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

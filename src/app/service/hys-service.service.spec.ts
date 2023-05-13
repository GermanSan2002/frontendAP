import { TestBed } from '@angular/core/testing';

import { HysServiceService } from './hys-service.service';

describe('HysServiceService', () => {
  let service: HysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DiplomeserviceService } from './diplomeservice.service';

describe('DiplomeserviceService', () => {
  let service: DiplomeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

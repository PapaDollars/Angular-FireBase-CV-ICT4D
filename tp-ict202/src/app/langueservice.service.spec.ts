import { TestBed } from '@angular/core/testing';

import { LangueserviceService } from './langueservice.service';

describe('LangueserviceService', () => {
  let service: LangueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

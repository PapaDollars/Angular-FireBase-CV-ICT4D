import { TestBed } from '@angular/core/testing';

import { CentreIserviceService } from './centre-iservice.service';

describe('CentreIserviceService', () => {
  let service: CentreIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

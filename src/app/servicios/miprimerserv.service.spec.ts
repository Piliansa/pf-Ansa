import { TestBed } from '@angular/core/testing';

import { MiprimerservService } from './miprimerserv.service';

describe('MiprimerservService', () => {
  let service: MiprimerservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiprimerservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

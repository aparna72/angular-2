/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicenameService } from './servicename.service';

describe('ServicenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicenameService]
    });
  });

  it('should ...', inject([ServicenameService], (service: ServicenameService) => {
    expect(service).toBeTruthy();
  }));
});

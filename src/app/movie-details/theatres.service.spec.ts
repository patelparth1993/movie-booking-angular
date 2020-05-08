import { TestBed } from '@angular/core/testing';

import { TheatresService } from './theatres.service';

describe('TheatresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheatresService = TestBed.get(TheatresService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FraseDiaService } from './frase-dia.service';

describe('FraseDiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraseDiaService = TestBed.get(FraseDiaService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PreencherCidadeEstadoService } from './preencher-cidade-estado.service';

describe('PreencherCidadeEstadoService', () => {
  let service: PreencherCidadeEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreencherCidadeEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

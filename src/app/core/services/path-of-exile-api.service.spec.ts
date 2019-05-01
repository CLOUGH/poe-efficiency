import { TestBed } from '@angular/core/testing';

import { PathOfExileApiService } from './path-of-exile-api.service';

describe('PathOfExileApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathOfExileApiService = TestBed.get(PathOfExileApiService);
    expect(service).toBeTruthy();
  });
});

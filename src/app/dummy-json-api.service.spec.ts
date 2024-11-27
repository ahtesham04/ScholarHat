import { TestBed } from '@angular/core/testing';

import { DummyJsonApiService } from './dummy-json-api.service';

describe('DummyJsonApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyJsonApiService = TestBed.get(DummyJsonApiService);
    expect(service).toBeTruthy();
  });
});

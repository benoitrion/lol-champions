import { TestBed } from '@angular/core/testing';

import { ChampionsListService } from './champions-list.service';

describe('ChampionsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampionsListService = TestBed.get(ChampionsListService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ArticlesDataService } from './articles-data.service';

describe('ArticlesDataServicesService', () => {
  let service: ArticlesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

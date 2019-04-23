import { TestBed } from '@angular/core/testing';

import { ArticleListService } from './article-list.service';

describe('ArticleListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleListService = TestBed.get(ArticleListService);
    expect(service).toBeTruthy();
  });
});

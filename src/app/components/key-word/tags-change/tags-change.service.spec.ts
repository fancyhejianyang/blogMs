import { TestBed } from '@angular/core/testing';

import { TagsChangeService } from './tags-change.service';

describe('TagsChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsChangeService = TestBed.get(TagsChangeService);
    expect(service).toBeTruthy();
  });
});

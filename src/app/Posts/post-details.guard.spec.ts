import { TestBed } from '@angular/core/testing';

import { PostDetailsGuard } from './post-details.guard';

describe('PostDetailsGuard', () => {
  let guard: PostDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

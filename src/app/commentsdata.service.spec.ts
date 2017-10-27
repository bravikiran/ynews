import { TestBed, inject } from '@angular/core/testing';

import { CommentsdataService } from './commentsdata.service';

describe('CommentsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsdataService]
    });
  });

  it('should be created', inject([CommentsdataService], (service: CommentsdataService) => {
    expect(service).toBeTruthy();
  }));
});

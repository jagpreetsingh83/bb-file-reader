import { TestBed } from '@angular/core/testing';

import { FileAdapterService } from './file-adapter.service';

describe('FileAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileAdapterService = TestBed.get(FileAdapterService);
    expect(service).toBeTruthy();
  });
});

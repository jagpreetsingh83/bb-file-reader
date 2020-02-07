import { TestBed } from '@angular/core/testing';
import { FileAdapterService, FileRecordAdapter } from '@file/services/file-adapter.service';
import { FileReaderService } from '@file/services/file-reader.service';
import * as FileStore from '@file/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppTestModule } from '@tests/app-test.module';
import * as FILE_MOCK from '@tests/file-import/file-import.test.util';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { FileEffects } from './file.effects';

describe('FileEffects', () => {
  let actions$: Observable<any>;
  let effects: FileEffects;
  let reader: FileReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      providers: [
        FileEffects,
        FileReaderService,
        FileAdapterService,
        FileRecordAdapter,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FileEffects>(FileEffects);
    reader = TestBed.get(FileReaderService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('readFile$', () => {
    const input = FileStore.readFile({
      payload: { file: FILE_MOCK.DATA_TRANSFER }
    });

    it('should dispatch readFileSuccess upon success', () => {
      const output = FileStore.readFileSuccess({
        payload: {
          records: FILE_MOCK.FILE_RECORDS
        }
      });

      actions$ = hot('-a', { a: input });

      const expected = cold('--b', { b: output });

      reader.read = jasmine
        .createSpy()
        .and.returnValue(cold('-a|', { a: FILE_MOCK.CSV_RECORDS }));

      expect(effects.readFile$).toBeObservable(expected);
      expect(reader.read).toHaveBeenCalledWith(FILE_MOCK.DATA_TRANSFER);
    });

    it('should dispatch readFileFailure upon error', () => {
      const error = new Error('kboom');

      const output = FileStore.readFileFailure({
        error: error.message
      });

      actions$ = hot('-a', { a: input });

      const expected = cold('--b', { b: output });

      reader.read = jasmine.createSpy().and.returnValue(cold('-#|', {}, error));

      expect(effects.readFile$).toBeObservable(expected);
      expect(reader.read).toHaveBeenCalledWith(FILE_MOCK.DATA_TRANSFER);
    });
  });
});

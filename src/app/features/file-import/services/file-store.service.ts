import { Injectable } from '@angular/core';
import { FileState, readFile, selectFilteredRecords } from '@file/store';
import { Store } from '@ngrx/store';

@Injectable()
export class FileStoreService {
  constructor(private store: Store<FileState>) {}

  readFile(file: DataTransfer) {
    this.store.dispatch(readFile({ payload: { file } }));
  }

  getFilteredRecords(issueCount: number) {
    return this.store.select(selectFilteredRecords, issueCount);
  }
}

import { Injectable } from '@angular/core';
import { FileState, readFile } from '@file/store';
import { Store } from '@ngrx/store';

@Injectable()
export class FileStoreService {
  constructor(private store: Store<FileState>) {}

  readFile(file: DataTransfer) {
    this.store.dispatch(readFile({ payload: { file } }));
  }
}

import { createFeatureSelector } from '@ngrx/store';

import * as fromFile from '../reducers/file.reducer';

export const selectFileState = createFeatureSelector<fromFile.FileState>(
  fromFile.fileFeatureKey
);

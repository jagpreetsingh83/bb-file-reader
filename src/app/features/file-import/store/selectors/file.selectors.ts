import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFile from '../reducers/file.reducer';

export const selectFileState = createFeatureSelector<fromFile.FileState>(
  fromFile.fileFeatureKey
);

export const selectLoading = createSelector(
  selectFileState,
  (state: fromFile.FileState) => state.loading
);

export const selectFilteredRecords = createSelector(
  selectFileState,
  (state: fromFile.FileState, props) =>
    props && props.issueCount
      ? state.records.filter(r => r.issueCount <= props.issueCount)
      : state.records
);

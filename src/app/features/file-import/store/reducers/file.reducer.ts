import { FileRecord } from '@file/models/file-import-models';
import { Action, createReducer, on } from '@ngrx/store';

import * as FileActions from '../actions/file.actions';

export const fileFeatureKey = 'file';

export interface FileState {
  records: FileRecord[];
}

export const initialState: FileState = {
  records: []
};

const fileReducer = createReducer(
  initialState,

  on(FileActions.readFile, state => state),
  on(FileActions.readFileSuccess, (state, { payload: { records } }) => ({
    ...state,
    records
  })),
  on(FileActions.readFileFailure, (state, action) => state)
);

export function reducer(state: FileState | undefined, action: Action) {
  return fileReducer(state, action);
}

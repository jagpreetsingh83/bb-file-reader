import { FileRecord } from '@file/models/file-import-models';
import { Action, createReducer, on } from '@ngrx/store';
import { Loadable, loadInit, onLoad, onLoadFail, onLoadSuccess } from '@shared/models/loadable.models';

import * as FileActions from '../actions/file.actions';

export const fileFeatureKey = 'file';

export interface FileState extends Loadable {
  records: FileRecord[];
}

export const initialState: FileState = {
  records: [],
  ...loadInit()
};

const fileReducer = createReducer(
  initialState,

  on(FileActions.readFile, state => ({
    ...state,
    ...onLoad()
  })),
  on(FileActions.readFileSuccess, (state, { payload: { records } }) => ({
    ...state,
    records,
    ...onLoadSuccess()
  })),
  on(FileActions.readFileFailure, (state, { error }) => ({
    ...state,
    ...onLoadFail(error)
  }))
);

export function reducer(state: FileState | undefined, action: Action) {
  return fileReducer(state, action);
}

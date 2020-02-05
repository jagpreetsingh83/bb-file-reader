import { Action, createReducer, on } from '@ngrx/store';

import * as FileActions from '../actions/file.actions';

export const fileFeatureKey = 'file';

export interface State {}

export const initialState: State = {};

const fileReducer = createReducer(
  initialState,

  on(FileActions.loadFiles, state => state),
  on(FileActions.loadFilesSuccess, (state, action) => state),
  on(FileActions.loadFilesFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return fileReducer(state, action);
}

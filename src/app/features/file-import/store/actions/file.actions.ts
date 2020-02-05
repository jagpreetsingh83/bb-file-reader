import { createAction, props } from '@ngrx/store';

export const loadFiles = createAction('[File] Load Files');

export const loadFilesSuccess = createAction(
  '[File] Load Files Success',
  props<{ data: any }>()
);

export const loadFilesFailure = createAction(
  '[File] Load Files Failure',
  props<{ error: any }>()
);

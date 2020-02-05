import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as FileActions from '../actions/file.actions';

@Injectable()
export class FileEffects {
  loadFiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FileActions.loadFiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FileActions.loadFilesSuccess({ data })),
          catchError(error => of(FileActions.loadFilesFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}

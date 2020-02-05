import { Injectable } from '@angular/core';
import { FileAdapterService } from '@file/services/file-adapter.service';
import { FileReaderService } from '@file/services/file-reader.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as FileActions from '../actions/file.actions';

@Injectable()
export class FileEffects {
  readFile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FileActions.readFile),
      tap(({ payload: { file } }) =>
        this.logger.debug('Trying to read file', file.files[0].name)
      ),
      switchMap(({ payload: { file } }) =>
        this.reader.read(file).pipe(
          tap(data => this.logger.debug('Read', data)),
          map(data => this.adapter.getFileRecords(data)),
          map(records =>
            FileActions.readFileSuccess({
              payload: { records }
            })
          ),
          catchError(error => {
            this.logger.error('Error while reading file', error);
            return of(FileActions.readFileFailure({ error }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private logger: NGXLogger,
    private reader: FileReaderService,
    private adapter: FileAdapterService
  ) {}
}

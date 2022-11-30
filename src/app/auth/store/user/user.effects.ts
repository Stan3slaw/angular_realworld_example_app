import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { AuthService } from '../../services/auth.service';
import { getCurrentUserFailed, getCurrentUserInitialized, getCurrentUserSuccessful } from './user.actions';

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserInitialized),
      mergeMap(() => {
        const token = this.persistanceService.get('jwt-token');
        if (!token) {
          return of(getCurrentUserFailed());
        }

        return this.authService.getCurrentUser().pipe(
          map((userResponseDto) => getCurrentUserSuccessful({ userResponseDto })),
          catchError(() => of(getCurrentUserFailed())),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}
}

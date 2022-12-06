import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap, tap } from 'rxjs';

import { PersistanceService } from '../../../shared/services/persistance.service';
import { AuthService } from '../../services/auth.service';
import { loginFailed, loginInitialized, loginSuccessful } from './login.actions';

@Injectable()
export class LoginEffects {
  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginInitialized),
      mergeMap(({ loginDto }) =>
        this.authService.login(loginDto).pipe(
          map((userResponseDto) => {
            this.persistanceService.set('jwt-token', userResponseDto.token);

            return loginSuccessful({ userResponseDto });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  public redirectOnSuccessfulLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessful),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  public constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}

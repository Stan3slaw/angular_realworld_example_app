import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap, tap } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

import { AuthService } from '../../services/auth.service';
import { registerFailed, registerInitialized, registerSuccessful } from './register.actions';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerInitialized),
      mergeMap(({ registerDto }) =>
        this.authService.register(registerDto).pipe(
          map((userResponseDto) => {
            this.persistanceService.set('jwt-token', userResponseDto.token);

            return registerSuccessful({ userResponseDto });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  redirectOnSuccessfulRegistration$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessful),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';
import type { HttpErrorResponse } from '@angular/common/http';

import { UserProfileService } from '../../services/user-profile.service';
import { getUserProfileFailed, getUserProfileInitialized, getUserProfileSuccessful } from './user-profile.actions';

@Injectable()
export class UserProfileEffects {
  public getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileInitialized),
      mergeMap(({ slug }) =>
        this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile) => getUserProfileSuccessful({ userProfile })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(getUserProfileFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  public constructor(private actions$: Actions, private userProfileService: UserProfileService) {}
}

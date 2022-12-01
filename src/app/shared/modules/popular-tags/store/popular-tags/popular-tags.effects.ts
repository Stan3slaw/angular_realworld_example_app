import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';

import { PopularTagsService } from '../../services/popular-tags.service';
import { getPopularTagsFailed, getPopularTagsInitialized, getPopularTagsSuccessful } from './popular-tags.actions';

@Injectable()
export class PopularTagsEffects {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsInitialized),
      mergeMap(() =>
        this.popularTagsService.getPopularTags().pipe(
          map((popularTags) => getPopularTagsSuccessful({ popularTags })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(getPopularTagsFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}
}

import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';

import { FeedService } from '../../services/feed.service';
import { getFeedFailed, getFeedInitialized, getFeedSuccessful } from './feed.actions';

@Injectable()
export class FeedEffects {
  public getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedInitialized),
      mergeMap(({ endpoint }) =>
        this.feedService.getFeed(endpoint).pipe(
          map((feed) => getFeedSuccessful({ feed })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(getFeedFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  public constructor(private actions$: Actions, private feedService: FeedService) {}
}

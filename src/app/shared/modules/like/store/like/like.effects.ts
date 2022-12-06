import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';
import { Article } from 'src/app/shared/modules/article/types/article.types';

import { LikeService } from '../../services/like.service';
import { addToFavoritesFailed, addToFavoritesInitialized, addToFavoritesSuccessful } from './like.actions';

@Injectable()
export class LikeEffects {
  public like$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesInitialized),
      mergeMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.likeService.removeFromFavorites(slug)
          : this.likeService.addToFavorites(slug);

        return article$.pipe(
          map((article: Article) => {
            return addToFavoritesSuccessful({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(addToFavoritesFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        );
      }),
    ),
  );

  public constructor(private actions$: Actions, private likeService: LikeService) {}
}

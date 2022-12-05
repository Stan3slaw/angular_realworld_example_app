import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap, tap } from 'rxjs';

import { UpdateArticleService } from '../../services/update-article.service';
import { updateArticleFailed, updateArticleInitialized, updateArticleSuccessful } from './update-article.actions';

@Injectable()
export class UpdateArticleEffects {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleInitialized),
      mergeMap(({ slug, updateArticleDto }) =>
        this.updateArticleService.updateArticle(slug, updateArticleDto).pipe(
          map((article) => updateArticleSuccessful({ article })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(updateArticleFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  redirectOnSuccessfulUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessful),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private updateArticleService: UpdateArticleService, private router: Router) {}
}

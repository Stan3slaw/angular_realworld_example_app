import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap, tap } from 'rxjs';

import { CreateArticleService } from '../../services/create-article.service';
import { createArticleFailed, createArticleInitialized, createArticleSuccessful } from './create-article.actions';

@Injectable()
export class CreateArticleEffects {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleInitialized),
      mergeMap(({ createArticleDto }) =>
        this.createArticleService.createArticle(createArticleDto).pipe(
          map((article) => createArticleSuccessful({ article })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(createArticleFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  redirectOnSuccessfulCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessful),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private createArticleService: CreateArticleService, private router: Router) {}
}

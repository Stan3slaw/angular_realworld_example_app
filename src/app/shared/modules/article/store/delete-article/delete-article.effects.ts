import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap, tap } from 'rxjs';
import { ArticleService } from 'src/app/shared/modules/article/services/article.service';

import { deleteArticleFailed, deleteArticleInitialized, deleteArticleSuccessful } from './delete-article.actions';

@Injectable()
export class DeleteArticleEffects {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleInitialized),
      mergeMap(({ slug }) =>
        this.articleService.deleteArticle(slug).pipe(
          map(() => deleteArticleSuccessful()),
          catchError((errorResponse: HttpErrorResponse) =>
            of(deleteArticleFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  redirectOnSuccessfulDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessful),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router) {}
}

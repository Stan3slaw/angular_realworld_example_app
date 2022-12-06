import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, mergeMap } from 'rxjs';
import { ArticleService } from 'src/app/shared/modules/article/services/article.service';

import { getArticleFailed, getArticleInitialized, getArticleSuccessful } from './article.actions';

@Injectable()
export class ArticleEffects {
  public getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleInitialized),
      mergeMap(({ slug }) =>
        this.articleService.getArticle(slug).pipe(
          map((article) => getArticleSuccessful({ article })),
          catchError((errorResponse: HttpErrorResponse) =>
            of(getArticleFailed({ errorsResponse: errorResponse.error.errors })),
          ),
        ),
      ),
    ),
  );

  public constructor(private actions$: Actions, private articleService: ArticleService) {}
}

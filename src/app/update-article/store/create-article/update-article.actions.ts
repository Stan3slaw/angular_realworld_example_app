import { createAction, props } from '@ngrx/store';
import { Article, CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const updateArticleInitialized = createAction(
  ActionTypes.UPDATE_ARTICLE_INITIALIZED,
  props<{ slug: string | null; updateArticleDto: CreateUpdateArticleDto }>(),
);
export const updateArticleSuccessful = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESSFUL,
  props<{ article: Article }>(),
);
export const updateArticleFailed = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

import { createAction, props } from '@ngrx/store';
import { Article, CreateUpdateArticleDto } from 'src/app/shared/modules/article/types/article.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const createArticleInitialized = createAction(
  ActionTypes.CREATE_ARTICLE_INITIALIZED,
  props<{ createArticleDto: CreateUpdateArticleDto }>(),
);
export const createArticleSuccessful = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESSFUL,
  props<{ article: Article }>(),
);
export const createArticleFailed = createAction(
  ActionTypes.CREATE_ARTICLE_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

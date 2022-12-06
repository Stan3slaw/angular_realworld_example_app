import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/shared/modules/article/types/article.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const getArticleInitialized = createAction(
  ActionTypes.GET_ARTICLE_INITIALIZED,
  props<{ slug: string | null }>(),
);
export const getArticleSuccessful = createAction(ActionTypes.GET_ARTICLE_SUCCESSFUL, props<{ article: Article }>());
export const getArticleFailed = createAction(
  ActionTypes.GET_ARTICLE_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

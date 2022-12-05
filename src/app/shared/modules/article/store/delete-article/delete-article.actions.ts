import { createAction, props } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const deleteArticleInitialized = createAction(
  ActionTypes.DELETE_ARTICLE_INITIALIZED,
  props<{ slug: string | null }>(),
);
export const deleteArticleSuccessful = createAction(ActionTypes.DELETE_ARTICLE_SUCCESSFUL);
export const deleteArticleFailed = createAction(
  ActionTypes.DELETE_ARTICLE_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

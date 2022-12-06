import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/shared/modules/article/types/article.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const addToFavoritesInitialized = createAction(
  ActionTypes.ADD_TO_FAVORITES_INITIALIZED,
  props<{ isFavorited: boolean; slug: string }>(),
);
export const addToFavoritesSuccessful = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESSFUL,
  props<{ article: Article }>(),
);
export const addToFavoritesFailed = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

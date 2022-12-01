import { createAction, props } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { ActionTypes } from './action.types';

export const getPopularTagsInitialized = createAction(ActionTypes.GET_POPULAR_TAGS_INITIALIZED);
export const getPopularTagsSuccessful = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESSFUL,
  props<{ popularTags: string[] }>(),
);
export const getPopularTagsFailed = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

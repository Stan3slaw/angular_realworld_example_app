import { createReducer, on } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { getPopularTagsFailed, getPopularTagsInitialized, getPopularTagsSuccessful } from './popular-tags.actions';

export interface PopularTagsState {
  tags?: string[];
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: PopularTagsState = {
  tags: undefined,
  loading: false,
  errors: undefined,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsInitialized,
    (): PopularTagsState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    getPopularTagsSuccessful,
    (_, action): PopularTagsState => ({
      ...initialState,
      tags: action.popularTags,
      loading: false,
    }),
  ),
  on(
    getPopularTagsFailed,
    (_, action): PopularTagsState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

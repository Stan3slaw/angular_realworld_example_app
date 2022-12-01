import { createReducer, on } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { FeedResponseDto } from '../../types/feed.types';
import { getFeedFailed, getFeedInitialized, getFeedSuccessful } from './feed.actions';

export interface FeedState {
  feed?: FeedResponseDto;
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: FeedState = {
  feed: undefined,
  loading: false,
  errors: undefined,
};

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedInitialized,
    (): FeedState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    getFeedSuccessful,
    (_, action): FeedState => ({
      ...initialState,
      feed: action.feed,
      loading: false,
    }),
  ),
  on(
    getFeedFailed,
    (_, action): FeedState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

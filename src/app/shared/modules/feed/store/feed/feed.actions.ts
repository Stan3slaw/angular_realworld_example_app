import { createAction, props } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { FeedResponseDto } from '../../types/feed.types';
import { ActionTypes } from './action.types';

export const getFeedInitialized = createAction(ActionTypes.GET_FEED_INITIALIZED, props<{ endpoint: string }>());
export const getFeedSuccessful = createAction(ActionTypes.GET_FEED_SUCCESSFUL, props<{ feed: FeedResponseDto }>());
export const getFeedFailed = createAction(ActionTypes.GET_FEED_FAILED, props<{ errorsResponse: ErrorsResponse }>());

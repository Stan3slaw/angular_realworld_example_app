import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { FeedResponseDto } from '../../types/feed.types';

export const getFeed = (state: AppState): FeedResponseDto | undefined => state.feed.feed;
export const getIsLoading = (state: AppState): boolean => state.feed.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.feed.errors;

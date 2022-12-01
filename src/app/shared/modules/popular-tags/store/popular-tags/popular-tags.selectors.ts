import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

export const getPopularTags = (state: AppState): string[] | undefined => state.popularTags.tags;
export const getIsLoading = (state: AppState): boolean => state.popularTags.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.popularTags.errors;

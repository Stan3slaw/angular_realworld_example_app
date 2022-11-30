import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

export const getIsLoading = (state: AppState): boolean => state.register.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.register.errors;

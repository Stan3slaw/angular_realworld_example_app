import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';
import { UserResponseDto } from 'src/app/shared/types/user.types';

export const getUser = (state: AppState): UserResponseDto | undefined => state.auth.user;
export const getIsLoading = (state: AppState): boolean => state.auth.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.auth.errors;

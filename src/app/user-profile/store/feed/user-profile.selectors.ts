import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { UserProfile } from '../../types/user-profile.types';

export const getUserProfile = (state: AppState): UserProfile | undefined => state.userProfile.user;
export const getIsLoading = (state: AppState): boolean => state.userProfile.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.userProfile.errors;

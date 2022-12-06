import { createReducer, on } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { UserProfile } from '../../types/user-profile.types';
import { getUserProfileFailed, getUserProfileInitialized, getUserProfileSuccessful } from './user-profile.actions';

export interface UserProfileState {
  user?: UserProfile;
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: UserProfileState = {
  user: undefined,
  loading: false,
  errors: undefined,
};

export const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileInitialized,
    (): UserProfileState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    getUserProfileSuccessful,
    (_, action): UserProfileState => ({
      ...initialState,
      user: action.userProfile,
      loading: false,
    }),
  ),
  on(
    getUserProfileFailed,
    (_, action): UserProfileState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

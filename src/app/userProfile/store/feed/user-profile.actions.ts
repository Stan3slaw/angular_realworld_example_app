import { createAction, props } from '@ngrx/store';

import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { UserProfile } from '../../types/user-profile.types';
import { ActionTypes } from './action.types';

export const getUserProfileInitialized = createAction(
  ActionTypes.GET_USER_PROFILE_INITIALIZED,
  props<{ slug: string | null }>(),
);
export const getUserProfileSuccessful = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESSFUL,
  props<{ userProfile: UserProfile }>(),
);
export const getUserProfileFailed = createAction(
  ActionTypes.GET_USER_PROFILE_FAILED,
  props<{ errorsResponse: ErrorsResponse }>(),
);

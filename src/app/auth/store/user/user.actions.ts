import { createAction, props } from '@ngrx/store';

import { UserDto } from '../../../shared/types/user.types';
import { ActionTypes } from './action.types';

export const getCurrentUserInitialized = createAction(ActionTypes.GET_CURRENT_USER_INITIALIZED);
export const getCurrentUserSuccessful = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESSFUL,
  props<{ userResponseDto: UserDto }>(),
);
export const getCurrentUserFailed = createAction(ActionTypes.GET_CURRENT_USER_FAILED);

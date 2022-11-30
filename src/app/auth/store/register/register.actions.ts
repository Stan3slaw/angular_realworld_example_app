import { createAction, props } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { UserDto } from '../../../shared/types/user.types';
import { RegisterDto } from '../../types/auth.types';
import { ActionTypes } from './action.types';

export const registerInitialized = createAction(
  ActionTypes.REGISTER_INITIALIZED,
  props<{ registerDto: RegisterDto }>(),
);
export const registerSuccessful = createAction(ActionTypes.REGISTER_SUCCESSFUL, props<{ userResponseDto: UserDto }>());
export const registerFailed = createAction(ActionTypes.REGISTER_FAILED, props<{ errorsResponse: ErrorsResponse }>());

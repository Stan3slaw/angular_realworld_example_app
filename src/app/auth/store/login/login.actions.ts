import { createAction, props } from '@ngrx/store';

import { ErrorsResponse } from '../../../shared/types/errors.types';
import { UserDto } from '../../../shared/types/user.types';
import { LoginDto } from '../../types/auth.types';
import { ActionTypes } from './action.types';

export const loginInitialized = createAction(ActionTypes.LOGIN_INITIALIZED, props<{ loginDto: LoginDto }>());
export const loginSuccessful = createAction(ActionTypes.LOGIN_SUCCESSFUL, props<{ userResponseDto: UserDto }>());
export const loginFailed = createAction(ActionTypes.LOGIN_FAILED, props<{ errorsResponse: ErrorsResponse }>());

import { createReducer, on } from '@ngrx/store';
import type { ErrorsResponse } from 'src/app/shared/types/errors.types';
import type { UserResponseDto } from 'src/app/shared/types/user.types';

import { registerFailed, registerInitialized, registerSuccessful } from './register.actions';

export interface AuthState {
  user?: UserResponseDto;
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: AuthState = {
  user: undefined,
  loading: false,
  errors: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerInitialized,
    (): AuthState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    registerSuccessful,
    (_, action): AuthState => ({
      ...initialState,
      user: action.userResponseDto,
      loading: false,
    }),
  ),
  on(
    registerFailed,
    (_, action): AuthState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

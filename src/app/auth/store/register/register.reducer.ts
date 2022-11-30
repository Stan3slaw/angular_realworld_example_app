import { createReducer, on } from '@ngrx/store';
import type { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { registerFailed, registerInitialized, registerSuccessful } from './register.actions';

export interface RegisterState {
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: RegisterState = {
  loading: false,
  errors: undefined,
};

export const registerReducer = createReducer(
  initialState,
  on(
    registerInitialized,
    (): RegisterState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    registerSuccessful,
    (): RegisterState => ({
      ...initialState,
      loading: false,
    }),
  ),
  on(
    registerFailed,
    (_, action): RegisterState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

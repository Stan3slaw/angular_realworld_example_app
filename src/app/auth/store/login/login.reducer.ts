import { createReducer, on } from '@ngrx/store';

import { ErrorsResponse } from '../../../shared/types/errors.types';
import { loginFailed, loginInitialized, loginSuccessful } from './login.actions';

export interface LoginState {
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: LoginState = {
  loading: false,
  errors: undefined,
};

export const loginReducer = createReducer(
  initialState,
  on(
    loginInitialized,
    (): LoginState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    loginSuccessful,
    (): LoginState => ({
      ...initialState,
      loading: false,
    }),
  ),
  on(
    loginFailed,
    (_, action): LoginState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
);

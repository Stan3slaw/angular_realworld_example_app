import { createReducer, on } from '@ngrx/store';
import { UserDto } from 'src/app/shared/types/user.types';

import { loginSuccessful } from '../login/login.actions';
import { logout } from '../logout/logout.actions';
import { registerSuccessful } from '../register/register.actions';
import { getCurrentUserFailed, getCurrentUserInitialized, getCurrentUserSuccessful } from './user.actions';

export interface UserState {
  user?: UserDto | null;
  loading: boolean;
}

const initialState: UserState = {
  user: undefined,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(
    getCurrentUserInitialized,
    (): UserState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    getCurrentUserSuccessful,
    (_, action): UserState => ({
      ...initialState,
      user: action.userResponseDto,
      loading: false,
    }),
  ),
  on(
    getCurrentUserFailed,
    (): UserState => ({
      ...initialState,
      user: null,
      loading: false,
    }),
  ),
  on(
    loginSuccessful,
    (_, action): UserState => ({
      ...initialState,
      user: action.userResponseDto,
      loading: false,
    }),
  ),
  on(
    registerSuccessful,
    (_, action): UserState => ({
      ...initialState,
      user: action.userResponseDto,
      loading: false,
    }),
  ),
  on(
    logout,
    (): UserState => ({
      ...initialState,
      user: null,
    }),
  ),
);

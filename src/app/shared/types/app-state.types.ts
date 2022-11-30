import { LoginState } from 'src/app/auth/store/login/login.reducer';
import { RegisterState } from 'src/app/auth/store/register/register.reducer';
import { UserState } from 'src/app/auth/store/user/user.reducer';

export interface AppState {
  register: RegisterState;
  login: LoginState;
  user: UserState;
}

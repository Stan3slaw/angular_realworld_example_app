import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormErrorsModule } from '../shared/modules/form-errors/form-errors.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginEffects } from './store/login/login.effects';
import { loginReducer } from './store/login/login.reducer';
import { RegisterEffects } from './store/register/register.effects';
import { registerReducer } from './store/register/register.reducer';
import { UserEffects } from './store/user/user.effects';
import { userReducer } from './store/user/user.reducer';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('register', registerReducer),
    StoreModule.forFeature('login', loginReducer),
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([RegisterEffects, LoginEffects, UserEffects]),
    FormErrorsModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormErrorsModule } from '../shared/modules/form-errors/form-errors.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/register/register.effects';
import { authReducer } from './store/register/register.reducer';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    FormErrorsModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}

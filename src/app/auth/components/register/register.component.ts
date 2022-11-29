import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { registerInitialized } from '../../store/register/register.actions';
import { getErrors, getIsLoading } from '../../store/register/register.selectors';
import { RegisterDto } from '../../types/auth.types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
  }

  onSubmit(): void {
    const registerDto: RegisterDto = {
      user: this.form.value,
    };
    this.store.dispatch(registerInitialized({ registerDto }));
  }
}

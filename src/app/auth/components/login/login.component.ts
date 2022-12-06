import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { loginInitialized } from '../../store/login/login.actions';

import { getErrors, getIsLoading } from '../../store/login/login.selectors';
import { LoginDto } from '../../types/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;

  public constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
  }

  public onSubmit(): void {
    const loginDto: LoginDto = {
      user: this.form.value,
    };
    this.store.dispatch(loginInitialized({ loginDto }));
  }
}

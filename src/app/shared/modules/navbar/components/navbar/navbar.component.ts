import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/auth/store/logout/logout.actions';
import { getUser } from 'src/app/auth/store/user/user.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { UserDto } from 'src/app/shared/types/user.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public user$!: Observable<UserDto | undefined | null>;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.user$ = this.store.pipe(select(getUser));
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}

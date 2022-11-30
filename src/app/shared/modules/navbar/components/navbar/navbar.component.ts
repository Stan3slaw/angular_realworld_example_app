import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/auth/store/user/user.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { UserDto } from 'src/app/shared/types/user.types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public user$!: Observable<UserDto | undefined | null>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(getUser));
  }
}

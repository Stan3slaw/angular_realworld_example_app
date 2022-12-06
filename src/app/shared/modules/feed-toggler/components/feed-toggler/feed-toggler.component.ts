import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/auth/store/user/user.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { UserDto } from 'src/app/shared/types/user.types';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input() public currentTag!: string | null;

  public isLoggedIn$!: Observable<UserDto | undefined | null>;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(getUser));
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { getUser } from 'src/app/auth/store/user/user.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';
import { UserDto } from 'src/app/shared/types/user.types';

import { UserProfile } from '../../types/user-profile.types';
import { getErrors, getIsLoading, getUserProfile } from '../../store/feed/user-profile.selectors';
import { getUserProfileInitialized } from '../../store/feed/user-profile.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  public userProfile!: UserProfile | undefined;
  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;
  public userProfileSubscription!: Subscription;
  public isCurrentUserProfile$!: Observable<boolean>;

  private slug!: string | null;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(getUser), filter(Boolean)),
      this.store.pipe(select(getUserProfile), filter(Boolean)),
    ]).pipe(
      map(([currentUser, userProfile]: [UserDto, UserProfile]) => {
        return currentUser.username === userProfile.username;
      }),
    );
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store.pipe(select(getUserProfile)).subscribe((userProfile?: UserProfile) => {
      this.userProfile = userProfile;
    });

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.getUserProfile();
    });
  }

  private getUserProfile(): void {
    this.store.dispatch(getUserProfileInitialized({ slug: this.slug }));
  }

  public getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');

    return isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
  }
}

import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { parseUrl, stringify } from 'query-string';

import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';
import { environment } from 'src/environments/environment';

import { getFeedInitialized } from '../../store/feed/feed.actions';
import { getErrors, getFeed, getIsLoading } from '../../store/feed/feed.selectors';
import { FeedResponseDto } from '../../types/feed.types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public endpoint!: string;

  public limit = environment.limit;
  public baseUrl!: string;
  public currentPage!: number;
  public queryParamsSubscription!: Subscription;

  public isLoading$!: Observable<boolean>;
  public error$!: Observable<ErrorsResponse | undefined>;
  public feed$!: Observable<FeedResponseDto | undefined>;

  public constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const isEndpointChanged =
      !changes['endpoint'].firstChange && changes['endpoint'].currentValue !== changes['endpoint'].previousValue;
    if (isEndpointChanged) {
      this.getFeed();
    }
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.error$ = this.store.pipe(select(getErrors));
    this.feed$ = this.store.pipe(select(getFeed));
    this.baseUrl = this.router.url.split('?')[0];
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.getFeed();
    });
  }

  private getFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.endpoint);
    const stringifiedParams = stringify({ limit: this.limit, offset, ...parsedUrl.query });
    const urlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedInitialized({ endpoint: urlWithParams }));
  }
}

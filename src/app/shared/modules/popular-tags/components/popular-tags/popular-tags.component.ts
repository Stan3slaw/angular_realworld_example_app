import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { getPopularTagsInitialized } from '../../store/popular-tags/popular-tags.actions';
import { getErrors, getIsLoading, getPopularTags } from '../../store/popular-tags/popular-tags.selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<string[] | undefined>;
  isLoading$!: Observable<boolean>;
  errors$!: Observable<ErrorsResponse | undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(getPopularTags));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsInitialized());
  }
}

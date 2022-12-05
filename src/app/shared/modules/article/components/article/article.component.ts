import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { getUser } from 'src/app/auth/store/user/user.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { Article } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';
import { UserDto } from 'src/app/shared/types/user.types';

import { getArticleInitialized } from '../../store/article/article.actions';
import { getArticle, getErrors, getIsLoading } from '../../store/article/article.selectors';
import { deleteArticleInitialized } from '../../store/delete-article/delete-article.actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {
  public slug!: string | null;
  public article!: Article | undefined;
  private articleSubscription!: Subscription;

  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;
  public isAuthor$!: Observable<boolean>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
    this.isAuthor$ = combineLatest([this.store.pipe(select(getArticle)), this.store.pipe(select(getUser))]).pipe(
      map(([article, currentUser]: [Article | undefined, UserDto | undefined | null]) => {
        if (!article || !currentUser) {
          return false;
        }

        return currentUser.username === article.author.username;
      }),
    );
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store.pipe(select(getArticle)).subscribe((article: Article | undefined) => {
      this.article = article;
    });
  }

  private fetchData(): void {
    this.store.dispatch(getArticleInitialized({ slug: this.slug }));
  }

  public deleteArticle(): void {
    this.store.dispatch(deleteArticleInitialized({ slug: this.slug }));
  }
}

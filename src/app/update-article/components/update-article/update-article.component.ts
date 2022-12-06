import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { getArticleInitialized } from 'src/app/shared/modules/article/store/article/article.actions';
import { getArticle } from 'src/app/shared/modules/article/store/article/article.selectors';
import { AppState } from 'src/app/shared/types/app-state.types';
import { Article, CreateUpdateArticleDto } from 'src/app/shared/modules/article/types/article.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { updateArticleInitialized } from '../../store/create-article/update-article.actions';

import { getErrors, getIsLoading } from '../../store/create-article/update-article.selectors';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
})
export class UpdateArticleComponent implements OnInit {
  public initialValues$!: Observable<CreateUpdateArticleDto>;
  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;
  private slug!: string | null;

  public constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.getArticle();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
    this.initialValues$ = this.store.pipe(
      select(getArticle),
      filter(Boolean),
      map((article: Article) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      }),
    );
  }

  private getArticle(): void {
    this.store.dispatch(getArticleInitialized({ slug: this.slug }));
  }

  public onSubmit(updateArticleDto: CreateUpdateArticleDto): void {
    this.store.dispatch(updateArticleInitialized({ slug: this.slug, updateArticleDto }));
  }
}

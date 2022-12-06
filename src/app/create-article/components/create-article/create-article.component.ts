import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.types';
import { CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { createArticleInitialized } from '../../store/create-article/create-article.actions';
import { getErrors, getIsLoading } from '../../store/create-article/create-article.selectors';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {
  public initialValues: CreateUpdateArticleDto = {
    title: '',
    description: '',
    body: '',
    tagList: [''],
  };

  public isLoading$!: Observable<boolean>;
  public errors$!: Observable<ErrorsResponse | undefined>;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
  }

  public onSubmit(createArticleDto: CreateUpdateArticleDto): void {
    this.store.dispatch(createArticleInitialized({ createArticleDto }));
  }
}

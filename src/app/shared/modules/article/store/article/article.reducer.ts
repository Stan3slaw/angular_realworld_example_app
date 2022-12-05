import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';
import { updateArticleSuccessful } from 'src/app/update-article/store/create-article/update-article.actions';

import { deleteArticleSuccessful } from '../delete-article/delete-article.actions';

import { getArticleFailed, getArticleInitialized, getArticleSuccessful } from './article.actions';

export interface ArticleState {
  article?: Article;
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: ArticleState = {
  article: undefined,
  loading: false,
  errors: undefined,
};

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleInitialized,
    (): ArticleState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(
    getArticleSuccessful,
    (_, action): ArticleState => ({
      ...initialState,
      article: action.article,
      loading: false,
    }),
  ),
  on(
    getArticleFailed,
    (_, action): ArticleState => ({
      ...initialState,
      loading: false,
      errors: action.errorsResponse,
    }),
  ),
  on(deleteArticleSuccessful, (): ArticleState => initialState),
  on(
    updateArticleSuccessful,
    (_, action): ArticleState => ({
      ...initialState,
      article: action.article,
    }),
  ),
);

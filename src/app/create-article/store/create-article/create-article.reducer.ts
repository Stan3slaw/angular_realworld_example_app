import { createReducer, on } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { createArticleFailed, createArticleInitialized, createArticleSuccessful } from './create-article.actions';

export interface CreateArticleState {
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: CreateArticleState = {
  loading: false,
  errors: undefined,
};

export const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleInitialized,
    (): CreateArticleState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(createArticleSuccessful, (): CreateArticleState => initialState),
  on(
    createArticleFailed,
    (_, action): CreateArticleState => ({
      ...initialState,
      errors: action.errorsResponse,
    }),
  ),
);

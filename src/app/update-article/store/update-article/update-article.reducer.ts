import { createReducer, on } from '@ngrx/store';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

import { updateArticleFailed, updateArticleInitialized, updateArticleSuccessful } from './update-article.actions';

export interface UpdateArticleState {
  loading: boolean;
  errors?: ErrorsResponse;
}

const initialState: UpdateArticleState = {
  loading: false,
  errors: undefined,
};

export const updateArticleReducer = createReducer(
  initialState,
  on(
    updateArticleInitialized,
    (): UpdateArticleState => ({
      ...initialState,
      loading: true,
    }),
  ),
  on(updateArticleSuccessful, (): UpdateArticleState => initialState),
  on(
    updateArticleFailed,
    (_, action): UpdateArticleState => ({
      ...initialState,
      errors: action.errorsResponse,
    }),
  ),
);

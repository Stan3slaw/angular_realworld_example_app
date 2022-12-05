import { AppState } from 'src/app/shared/types/app-state.types';
import { Article } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

export const getArticle = (state: AppState): Article | undefined => state.article.article;
export const getIsLoading = (state: AppState): boolean => state.article.loading;
export const getErrors = (state: AppState): ErrorsResponse | undefined => state.article.errors;

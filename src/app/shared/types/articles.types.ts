import { UserProfile } from './user.types';

export interface Article {
  author: UserProfile;
  body: string;
  title: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  updatedAt: string;
  createdAt: string;
}

export interface ArticleResponseDto {
  article: Article;
}

export interface CreateUpdateArticleDto {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

import { UserProfile } from 'src/app/shared/types/user.types';

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

export interface FeedResponseDto {
  articles: Article[];
  articlesCount: number;
}

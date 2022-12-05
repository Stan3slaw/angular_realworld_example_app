import { Article } from 'src/app/shared/types/articles.types';

export interface FeedResponseDto {
  articles: Article[];
  articlesCount: number;
}

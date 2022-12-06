import { Article } from 'src/app/shared/modules/article/types/article.types';

export interface FeedResponseDto {
  articles: Article[];
  articlesCount: number;
}

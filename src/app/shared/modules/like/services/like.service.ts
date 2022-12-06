import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, ArticleResponseDto } from 'src/app/shared/types/articles.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class LikeService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug);

    return this.http.post<ArticleResponseDto>(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug);

    return this.http.delete<ArticleResponseDto>(url).pipe(map(this.getArticle));
  }

  private getArticle(articleResponseDto: ArticleResponseDto): Article {
    return articleResponseDto.article;
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }
}

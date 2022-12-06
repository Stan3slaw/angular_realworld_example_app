import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, ArticleResponseDto } from 'src/app/shared/modules/article/types/article.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class LikeService {
  public constructor(private http: HttpClient) {}

  public addToFavorites(slug: string): Observable<Article> {
    const url = this.getUrl(slug);

    return this.http.post<ArticleResponseDto>(url, {}).pipe(map(this.getArticle));
  }

  public removeFromFavorites(slug: string): Observable<Article> {
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Article, ArticleResponseDto } from '../../../types/articles.types';

@Injectable()
export class ArticleService {
  public constructor(private http: HttpClient) {}

  public getArticle(slug: string | null): Observable<Article> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<ArticleResponseDto>(url).pipe(map((response: ArticleResponseDto) => response.article));
  }

  public deleteArticle(slug: string | null): Observable<unknown> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<unknown>(url);
  }
}

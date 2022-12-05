import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, ArticleResponseDto, CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class UpdateArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug: string | null, updateArticleDto: CreateUpdateArticleDto): Observable<Article> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.put<ArticleResponseDto>(url, { article: updateArticleDto }).pipe(
      map((response: ArticleResponseDto) => {
        return response.article;
      }),
    );
  }
}

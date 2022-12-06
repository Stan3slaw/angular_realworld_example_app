import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Article,
  ArticleResponseDto,
  CreateUpdateArticleDto,
} from 'src/app/shared/modules/article/types/article.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class UpdateArticleService {
  public constructor(private http: HttpClient) {}

  public updateArticle(slug: string | null, updateArticleDto: CreateUpdateArticleDto): Observable<Article> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.put<ArticleResponseDto>(url, { article: updateArticleDto }).pipe(
      map((response: ArticleResponseDto) => {
        return response.article;
      }),
    );
  }
}

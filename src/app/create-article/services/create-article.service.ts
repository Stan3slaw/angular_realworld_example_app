import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, ArticleResponseDto, CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  public constructor(private http: HttpClient) {}

  public createArticle(createArticleDto: CreateUpdateArticleDto): Observable<Article> {
    const url = environment.apiUrl + '/articles';

    return this.http.post<ArticleResponseDto>(url, { article: createArticleDto }).pipe(
      map((response: ArticleResponseDto) => {
        return response.article;
      }),
    );
  }
}

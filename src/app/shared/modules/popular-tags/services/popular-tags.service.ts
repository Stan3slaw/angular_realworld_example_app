import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PopularTagsResponseDto } from '../types/popular-tags.types';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<PopularTagsResponseDto>(url).pipe(map((response: PopularTagsResponseDto) => response.tags));
  }
}

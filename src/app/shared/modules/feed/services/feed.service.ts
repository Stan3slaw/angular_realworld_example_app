import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FeedResponseDto } from '../types/feed.types';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(endpoint: string): Observable<FeedResponseDto> {
    const url = environment.apiUrl + endpoint;

    return this.http.get<FeedResponseDto>(url);
  }
}

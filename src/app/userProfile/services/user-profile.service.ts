import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { UserProfile, UserProfileResponseDto } from '../types/user-profile.types';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  public getUserProfile(slug: string | null): Observable<UserProfile> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http.get<UserProfileResponseDto>(url).pipe(map((response: UserProfileResponseDto) => response.profile));
  }
}

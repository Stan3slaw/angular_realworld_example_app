import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import type { UserResponseDto } from '../../shared/types/user.types';
import type { AuthResponseDto, RegisterDto } from '../types/auth.types';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto): Observable<UserResponseDto> {
    const url = environment.apiUrl + '/users';

    return this.http.post<AuthResponseDto>(url, registerDto).pipe(map((response: AuthResponseDto) => response.user));
  }
}

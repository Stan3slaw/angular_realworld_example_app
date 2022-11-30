import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import type { UserDto } from '../../shared/types/user.types';
import type { AuthResponseDto, LoginDto, RegisterDto } from '../types/auth.types';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponseDto): UserDto {
    return response.user;
  }

  register(registerDto: RegisterDto): Observable<UserDto> {
    const url = environment.apiUrl + '/users';

    return this.http.post<AuthResponseDto>(url, registerDto).pipe(map(this.getUser));
  }

  login(loginDto: LoginDto): Observable<UserDto> {
    const url = environment.apiUrl + '/users/login';

    return this.http.post<AuthResponseDto>(url, loginDto).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<UserDto> {
    const url = environment.apiUrl + '/user';

    return this.http.get<AuthResponseDto>(url).pipe(map(this.getUser));
  }
}

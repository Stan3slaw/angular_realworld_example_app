import { UserResponseDto } from 'src/app/shared/types/user.types';

export interface RegisterDto {
  user: {
    email: string;
    username: string;
    password: string;
  };
}

export interface AuthResponseDto {
  user: UserResponseDto;
}

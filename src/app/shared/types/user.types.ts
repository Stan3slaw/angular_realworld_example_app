export interface UserDto {
  id: number;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  bio?: string;
  image?: string;
  token: string;
}

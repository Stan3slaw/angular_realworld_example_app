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

export interface UserProfile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

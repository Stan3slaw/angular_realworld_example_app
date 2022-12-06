export interface UserProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface UserProfileResponseDto {
  profile: UserProfile;
}

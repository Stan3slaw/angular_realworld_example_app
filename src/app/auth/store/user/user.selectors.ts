import { AppState } from 'src/app/shared/types/app-state.types';
import { UserDto } from 'src/app/shared/types/user.types';

export const getUser = (state: AppState): UserDto | undefined | null => state.user.user;
export const getIsLoading = (state: AppState): boolean => state.user.loading;

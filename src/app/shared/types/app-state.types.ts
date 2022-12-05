import { LoginState } from 'src/app/auth/store/login/login.reducer';
import { RegisterState } from 'src/app/auth/store/register/register.reducer';
import { UserState } from 'src/app/auth/store/user/user.reducer';
import { CreateArticleState } from 'src/app/create-article/store/create-article/create-article.reducer';

import { ArticleState } from '../modules/article/store/article/article.reducer';
import { FeedState } from '../modules/feed/store/feed/feed.reducer';
import { PopularTagsState } from '../modules/popular-tags/store/popular-tags/popular-tags.reducer';

export interface AppState {
  register: RegisterState;
  login: LoginState;
  user: UserState;
  feed: FeedState;
  popularTags: PopularTagsState;
  article: ArticleState;
  createArticle: CreateArticleState;
}

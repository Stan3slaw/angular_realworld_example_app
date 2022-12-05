import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleService } from './services/article.service';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { TagsListModule } from '../tags-list/tags-list.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleEffects } from './store/article/article.effects';
import { articleReducer } from './store/article/article.reducer';
import { DeleteArticleEffects } from './store/delete-article/delete-article.effects';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffects, DeleteArticleEffects]),
    StoreModule.forFeature('article', articleReducer),
    RouterModule.forChild(routes),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    TagsListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [ArticleService],
})
export class ArticleModule {}

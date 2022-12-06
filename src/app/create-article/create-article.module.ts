import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffects } from './store/create-article/create-article.effects';
import { createArticleReducer } from './store/create-article/create-article.reducer';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', createArticleReducer),
    EffectsModule.forFeature([CreateArticleEffects]),
    ArticleFormModule,
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}

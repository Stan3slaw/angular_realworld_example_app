import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { UpdateArticleService } from './services/update-article.service';
import { UpdateArticleEffects } from './store/create-article/update-article.effects';
import { updateArticleReducer } from './store/create-article/update-article.reducer';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: UpdateArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('updateArticle', updateArticleReducer),
    EffectsModule.forFeature([UpdateArticleEffects]),
    ArticleFormModule,
    LoadingModule,
  ],
  declarations: [UpdateArticleComponent],
  providers: [UpdateArticleService],
})
export class UpdateArticleModule {}

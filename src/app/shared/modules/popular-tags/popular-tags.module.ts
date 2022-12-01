import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsComponent } from './components/popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { PopularTagsEffects } from './store/popular-tags/popular-tags.effects';
import { popularTagsReducer } from './store/popular-tags/popular-tags.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([PopularTagsEffects]),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}

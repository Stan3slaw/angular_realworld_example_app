import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UtilsService } from '../../services/utils.service';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { TagsListModule } from '../tags-list/tags-list.module';
import { FeedComponent } from './components/feed/feed.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FeedService } from './services/feed.service';
import { FeedEffects } from './store/feed/feed.effects';
import { feedReducer } from './store/feed/feed.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeedEffects]),
    StoreModule.forFeature('feed', feedReducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    TagsListModule,
  ],
  declarations: [FeedComponent, PaginationComponent],
  exports: [FeedComponent],
  providers: [FeedService, UtilsService],
})
export class FeedModule {}

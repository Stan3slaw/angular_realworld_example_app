import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedByTagComponent } from './components/feed-by-tag/feed-by-tag.component';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: FeedByTagComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [FeedByTagComponent],
})
export class FeedByTagModule {}

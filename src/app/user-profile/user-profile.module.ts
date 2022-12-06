import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserProfileComponent } from 'src/app/user-profile/components/user-profile/user-profile.component';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { UserProfileService } from './services/user-profile.service';
import { UserProfileEffects } from './store/feed/user-profile.effects';
import { userProfileReducer } from './store/feed/user-profile.reducer';

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UserProfileEffects]),
    StoreModule.forFeature('userProfile', userProfileReducer),
    FeedModule,
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService],
})
export class UserProfileModule {}

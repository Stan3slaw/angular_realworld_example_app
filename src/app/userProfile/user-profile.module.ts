import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from 'src/app/userProfile/components/userProfile/user-profile.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserProfileService } from './services/user-profile.service';
import { FeedModule } from '../shared/modules/feed/feed.module';
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

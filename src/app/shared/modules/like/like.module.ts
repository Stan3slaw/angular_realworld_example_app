import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { LikeComponent } from './components/like/like.component';
import { LikeService } from './services/like.service';
import { LikeEffects } from './store/like/like.effects';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([LikeEffects])],
  declarations: [LikeComponent],
  exports: [LikeComponent],
  providers: [LikeService],
})
export class LikeModule {}

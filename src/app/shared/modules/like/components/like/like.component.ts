import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addToFavoritesInitialized } from '../../store/like/like.actions';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
})
export class LikeComponent implements OnInit {
  @Input() public isFavoritedProps!: boolean;
  @Input() public favoritesCountProps!: number;
  @Input() public articleSlug!: string;

  public isFavorited!: boolean;
  public favoritesCount!: number;

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.isFavorited = this.isFavoritedProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  public handleLike(): void {
    this.store.dispatch(
      addToFavoritesInitialized({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      }),
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-feed',
  templateUrl: './personal-feed.component.html',
})
export class PersonalFeedComponent {
  public endpoint = '/articles/feed';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
})
export class GlobalFeedComponent {
  public endpoint = '/articles';
}

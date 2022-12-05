import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-feed-by-tag',
  templateUrl: './feed-by-tag.component.html',
})
export class FeedByTagComponent implements OnInit {
  public endpoint!: string;
  public currentTag!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentTag = params['slug'];
      this.endpoint = `/articles?tag=${this.currentTag}`;
    });
  }
}

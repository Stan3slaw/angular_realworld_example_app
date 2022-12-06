import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
})
export class TagsListComponent {
  @Input() tags!: string[];
}

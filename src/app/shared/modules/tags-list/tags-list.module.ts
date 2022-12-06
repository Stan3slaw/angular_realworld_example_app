import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TagsListComponent } from './components/tags-list/tags-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TagsListComponent],
  exports: [TagsListComponent],
})
export class TagsListModule {}

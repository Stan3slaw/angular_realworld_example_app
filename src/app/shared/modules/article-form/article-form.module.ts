import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormErrorsModule } from '../form-errors/form-errors.module';
import { ArticleFormComponent } from './components/create-article/article-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormErrorsModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}

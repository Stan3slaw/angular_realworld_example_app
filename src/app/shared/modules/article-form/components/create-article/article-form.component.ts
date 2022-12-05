import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues!: CreateUpdateArticleDto;
  @Input() isSubmitting!: boolean | null;
  @Input() errors!: ErrorsResponse | undefined | null;

  @Output() submitArticle = new EventEmitter<CreateUpdateArticleDto>();

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    });
  }

  handleSubmit(): void {
    this.submitArticle.emit(this.form.value);
  }
}

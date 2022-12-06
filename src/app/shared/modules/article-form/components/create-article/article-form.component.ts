import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateUpdateArticleDto } from 'src/app/shared/types/articles.types';
import { ErrorsResponse } from 'src/app/shared/types/errors.types';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() public initialValues!: CreateUpdateArticleDto | null;
  @Input() public isSubmitting!: boolean | null;
  @Input() public errors!: ErrorsResponse | undefined | null;

  @Output() public submitArticle = new EventEmitter<CreateUpdateArticleDto>();

  public form!: FormGroup;

  public constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      title: this.initialValues?.title,
      description: this.initialValues?.description,
      body: this.initialValues?.body,
      tagList: this.initialValues?.tagList.join(' '),
    });
  }

  public handleSubmit(): void {
    this.submitArticle.emit(this.form.value);
  }
}

import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import type { ErrorsResponse } from 'src/app/shared/types/errors.types';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
})
export class FormErrorsComponent implements OnInit {
  @Input() public formErrors?: ErrorsResponse | null;

  public errorsMessages?: string[] | null;

  public ngOnInit(): void {
    this.errorsMessages =
      this.formErrors &&
      Object.keys(this.formErrors).map((name) => {
        const messages = this.formErrors && this.formErrors[name].join(', ');

        return `${name} ${messages}`;
      });
  }
}

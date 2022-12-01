import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() articlesCount!: number;
  @Input() limit!: number;
  @Input() url!: string;
  @Input() currentPage!: number;

  public pagesCount!: number;
  public pages!: number[];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.articlesCount / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() public articlesCount!: number;
  @Input() public limit!: number;
  @Input() public url!: string;
  @Input() public currentPage!: number;

  public pagesCount!: number;
  public pages!: number[];

  public constructor(private utilsService: UtilsService) {}

  public ngOnInit(): void {
    this.pagesCount = Math.ceil(this.articlesCount / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}

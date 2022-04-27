import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from "../../models/book";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {

  @Input() data: Book[] = [];
  @Input() columns: string[] = [];

  trackByCoverId = (index: number, { cover_i }: Book) => cover_i;
}

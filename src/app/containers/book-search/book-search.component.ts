import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Observable, of, switchMap } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Params } from "@angular/router";
import { Book } from "../../models/book";
import { BookSearchApiService } from "../../services/book-search-api.service";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  private readonly params: BehaviorSubject<Params> = new BehaviorSubject<Params>({});

  form: FormGroup = this.createForm();

  books$: Observable<Book[]> = of([]);
  params$: Observable<Params> = this.params.asObservable();

  columns = ['#', 'title', 'cover', 'author', 'publish year']

  constructor(private readonly bookSearchApiService: BookSearchApiService) { }

  ngOnInit(): void {
    this.books$ = this.params$.pipe(
      filter((params: Params) => this.hasNoValues(params)),
      switchMap((params: Params) => this.bookSearchApiService.searchBooks(params)),
    );
  }

  createForm(): FormGroup {
    return new FormGroup({ title: new FormControl('', [Validators.required]) });
  }

  searchBooks(): void {
    this.params.next(this.form.getRawValue());
  }

  hasNoValues(params: Params): boolean {
    return Object.values(params).some((value) => String(value)?.length);
  }
}

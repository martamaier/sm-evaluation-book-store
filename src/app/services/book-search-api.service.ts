import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Params} from "@angular/router";
import {Response} from "../models/response";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookSearchApiService {
  #baseUrl = 'http://openlibrary.org/search.json';

  constructor(private readonly http: HttpClient) { }

  searchBooks(params: Params): Observable<Book[]> {
    return this.http.get<Response<Book>>(this.#baseUrl, { params })
      .pipe(map(({ docs }: Response<Book>) => docs));
  }
}

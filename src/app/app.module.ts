import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BookSearchComponent } from "./containers/book-search/book-search.component";
import { ArrayDisplayPipe } from './pipes/array-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookSearchComponent,
    SearchResultsComponent,
    ArrayDisplayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
